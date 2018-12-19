import React, {Component} from 'react';

class SearchBar extends Component {

    state = {
        term: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onParentSubmit(this.state.term)
    }


    render() {
        return (
            <div  className="ui segment" style={{height: '100vh' }}> 
                <h1>Dynamic Searching</h1>
                <form className="ui form" onSubmit={this.onFormSubmit}> 
                    <div className="ui field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar