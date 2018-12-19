import React, {Component} from 'react';
import './Sesons.css';
// import Loader from './Loader';

class Seasons extends Component {

    state = { 
        lat: null, 
        errorMessage: ''
    }

    seasonConfig = {
        summer: {
            text: 'Let\'s hit the beach',
            iconName: 'sun'
        },
        winter: {
            text: 'Burrrr it\'s cold',
            iconName: 'snowflake'
        }
    }

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

    renderContent () {
        const season = this.getSeason(this.state.lat, new Date().getMonth());
        const { text, iconName } = this.seasonConfig[season];
        if(this.state.errorMessage && !this.state.lat) {
            return <div style={{background: 'grey', height: '100vh'}}>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return(
                <div className={`season-display ${season}`}>
                    <h1 style={{textAlign: 'center'}}>Seasons</h1>
                <h3 style={{textAlign: 'center'}}>lattitude: {this.state.lat}</h3>
                <i className={`icon-left massive ${iconName} icon`}/>
                <h3>{text}</h3>
                <i className={`icon-right massive ${iconName} icon`}/>
                </div>
            ) 
        }
        return <div>
        {/* <Loader message="Please wait for location request"/> */}
        </div>
    }

    
    render() {
        return (
            <div style={{border: 'red solid 3px'}}>
                {this.renderContent()}
            </div>
        )
    }
}

export default Seasons;