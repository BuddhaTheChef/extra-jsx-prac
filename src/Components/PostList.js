import React, {Component} from 'react';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';
import { fetchPostsAndUsers } from '../actions';
import './Posts.css'

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
        // this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map((post) => {
            return (
                <div className="item" key={post.id} style={{padding:'50px', background: 'rebeccapurple', borderRadius: '13px', marginBottom: '40px'}}>
                    <i className="large middle aligned icon user iconPostList" />
                    <div className="content">
                        <div className="description"  style={{color: 'whitesmoke', marginLeft: '18px'}}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                    <UserHeader userId={post.userId}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', paddingTop: '35px', color: '#1489ff'}}>Post Lists</h1>
                <div style={{padding:'50px'}} className="ui relaxed divided list">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps,{fetchPostsAndUsers})(PostList);