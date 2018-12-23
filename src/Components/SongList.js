import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render() {
        console.log(this.props)
        return (    
            <div style={{height: '50vh'}}>
                <div>
                    <h2>Song list</h2>
                    <div className="ui divied list" style={{background: 'whitesmoke', padding: '30px', borderRadius: '9px'}}>
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

export default connect(mapStateToProps, {selectSong})(SongList);