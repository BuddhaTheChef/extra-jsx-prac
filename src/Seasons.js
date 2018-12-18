import React, {Component} from 'react';

class Seasons extends Component {

    state = { lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
            this.setState({ lat: position.coords.latitude})},
            (err) => this.setState({errorMessage: err.message})
       )
    }

    getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
    }

    
    render() {
        const season = this.getSeason(this.state.lat, new Date().getMonth());
        const icon = season === 'winter' ? 'snowflake' : 'sun';
        if(this.state.errorMessage && !this.state.lat) {
            return <div style={{background: 'grey', height: '100vh'}}>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return(
                <div style={{background: 'grey', height: '100vh'}}>
                    <h1 style={{textAlign: 'center'}}>Seasons</h1>
                <h3 style={{textAlign: 'center'}}>lattitude: {this.state.lat}</h3>
                <i className={`${icon} icon`}/>
                <h3>{season === 'winter' ? "Burrr it's Chilly!" : 'Lets hit the beach'}</h3>
                <i className={`${icon} icon`}/>
                </div>
            ) 
        }
        return <div style={{background: 'grey', height: '100vh'}}>Loading...</div>
    }
}

export default Seasons;