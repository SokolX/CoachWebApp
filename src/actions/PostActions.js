import { databasePost } from '../FirebaseConnector'
export const FETCH_POSTS = 'fetch_posts';
export const POST_STATUS = 'post_status';

export function getPosts() {
    return dispatch => {
        dispatch({
            type: POST_STATUS,
            payload: true
        });
        
        databasePost.on('value', data => {
            dispatch({
                type: FETCH_POSTS, 
                payload: data.val()
            });
            
            dispatch({
                type: POST_STATUS, 
                payload: false
            });
        }, () => {
            dispatch({
                type: POST_STATUS,
                payload: -1
            });
        });
    };
}

export function savePost(values) {
    return dispatch => databasePost.push(values);
}

export function deletePost(id) {
    return dispatch => databasePost.child(id).remove();
}

export function saveComment(comment, id, uid) {
  return dispatch => databasePost.child(id).child('comments').push({ content: comment.content, uid });
}

export function deleteComment(postId, commentId) {
  return dispatch => databasePost.child(postId).child('comments').child(commentId).remove();
}