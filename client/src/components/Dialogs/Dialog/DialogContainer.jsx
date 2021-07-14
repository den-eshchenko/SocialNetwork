import { connect } from 'react-redux';
import { compose } from 'redux';
import {addDialogMessageActionCreator, updateDialogCurrentTextActionCreator } from '../../../redux/dialogsPageReduser';
import { withAuthRediderct } from '../../HOC/withAuthRedirect';
import Dialog from './Dialog';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: ()=>{
      dispatch(addDialogMessageActionCreator());
    },
    updateDialogText: (text)=>{
      dispatch(updateDialogCurrentTextActionCreator(text));
    }
  }  
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRediderct
)(Dialog);
