import React, {Component} from 'react';

class SearchBar2 extends Component {
    state = {
        term: ''
    }

    onInputChange = () => {
        
    }

    render(){
        return (
            <div className='serch-bar2 ui segment'>
               <form className="ui form">
                   <div className="field">
                       <label>Video Search</label>
                       <input type="tex"  value={this.state.term} onChange={this.onInputChange}/>
                   </div>
               </form>
            </div>
        )
    }
}

export default SearchBar2