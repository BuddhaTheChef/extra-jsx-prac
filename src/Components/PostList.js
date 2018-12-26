import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        console.log(this.props.posts)
        return (
            <div>
                <h1 style={{textAlign: 'center', color: 'whitesmoke', paddingTop: '35px'}}>Post Lists</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps,{fetchPosts})(PostList);