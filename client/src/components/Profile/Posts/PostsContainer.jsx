import { connect } from 'react-redux';
import {addPostActionCreator} from '../../../redux/proffilePageReduser';
import Posts from './Posts';

let mapStateToProps = (state) => {
  return {
    proffilePage: state.proffilePage,
    isAuth: state.auth.isAuth
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (formData)=>{
      dispatch(addPostActionCreator(formData));
    },
  }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;