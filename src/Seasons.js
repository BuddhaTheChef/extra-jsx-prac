import React, {Component} from 'react';

class Seasons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
        }
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
            this.setState({ lat: position.coords.latitude})
        }, (err) => console.log(err))
    }
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div style={{background: 'grey', height: '100vh'}}>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return(
                <div style={{background: 'grey', height: '100vh'}}>
                    <h1 style={{textAlign: 'center'}}>Seasons</h1>
                <h3 style={{textAlign: 'center'}}>lattitude: {this.state.lat}</h3>
                </div>
            ) 
        }
        return <div style={{background: 'grey', height: '100vh'}}>Loading...</div>
    }
}

export default Seasons;