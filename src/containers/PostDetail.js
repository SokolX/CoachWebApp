import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../components/PostCard';
import Link from 'react-router-dom/es/Link';
import { deletePost, deleteComment } from '../actions/PostActions';
import AddComment from './AddComment';
import Comment from '../components/Comment';
import _ from 'lodash';

class PostDetail extends Component {
    
    renderComments() {
        return _.map(this.props.post.comments, (comment, key) => {
          
            return (
                    <Comment key={key} 
                        body={comment.content} 
                        id={key} 
                        delete={comment.uid === this.props.user.uid}
                        deleteComment={() => { this.props.deleteComment(this.props.match.params.id, key) }}
                    />
                    );
        });
      }

    renderPosts() {
        
        const { post, history, match, deletePost, user } = this.props;
        
        
        if (!post)
          
            return null;

            return (
                    <PostCard>
                    <h1>{post.title}</h1>
                    <p className="card-text">
                      {post.body}
                    </p>
                    {post.uid === user.uid &&
                    <button className="btn btn-danger float-right mb-1"
                            onClick={() => {
                              deletePost(match.params.id);
                              history.push('/players');
                            }}>Delete</button>}
                    <AddComment id={this.props.match.params.id}/>
                    </PostCard>
                    );
    }
    
  componentWillMount() {
    const { post } = this.props;
    if (post === undefined || post === null) {
      //history.replace('/players');
    }
  }

  render() {

    return (
      <div>
          { this.renderPosts() }
        
                <footer>
                    <Link className="btn btn-primary" to={'/blog'}>Wróć</Link>
                </footer>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { 
      post: state.posts[ownProps.match.params.id], 
      user: state.user, 
      posts: state.posts };
}

export default connect(mapStateToProps, { deletePost, deleteComment })(PostDetail);