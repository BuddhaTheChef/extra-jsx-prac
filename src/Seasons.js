import React, {Component} from 'react';

class Seasons extends Component {
    render() {
        window.navigator.geolocation.getCurrentPosition((position) => console.log(position), (err) => console.log(err))
        return (
            <div style={{background: 'grey', height: '100vh'}}>Seasons Div</div>
        )
    }
}

export default Seasons;