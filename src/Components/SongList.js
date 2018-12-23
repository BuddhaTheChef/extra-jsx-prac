import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render() {
        return (    
            <div style={{height: '50vh'}}>
                <h1>Redux Practice</h1>
                <div>
                    <h2>Song list</h2>
                    <div className="ui divied list">
                        {this.renderList()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {songs: state.songs}
}

export default connect(mapStateToProps)(SongList);