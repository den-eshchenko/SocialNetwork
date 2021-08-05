import React, { Dispatch } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import {ActionsDialogsType, actionsDialog, DefaultStateFromDialogsPageType } from '../../../redux/dialogsPageReduser';
import { AppStateType } from '../../../redux/reduxStore';
import { withAuthRediderct } from '../../HOC/withAuthRedirect';
import Dialog from './Dialog';

type MapStateToPropsType = {
  dialogsPage: DefaultStateFromDialogsPageType
}
type MapDispatchToPropsType = {
  sendMessage: () => void
  updateDialogText: (text: string) => void
}
// type OwnPropsType = {
//   // props: any
// }


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage 
  }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsDialogsType>): MapDispatchToPropsType => {
  return {
    sendMessage: ()=>{
      dispatch(actionsDialog.addDialogMessageActionCreator());
    },
    updateDialogText: (text)=>{
      dispatch(actionsDialog.updateDialogCurrentTextActionCreator(text));
    }
  }  
}

export type TDialogsProps = MapStateToPropsType & MapDispatchToPropsType;

class DialogContainer extends React.Component<TDialogsProps> {

  render(){
    return(
      <Dialog 
        dialogsPage={this.props.dialogsPage}
        sendMessage={this.props.sendMessage}
        updateDialogText={this.props.updateDialogText}
      />
    )
  }
}

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, TDefaultState>
export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, unknown, AppStateType>(mapStateToProps, mapDispatchToProps),
  withAuthRediderct
)(DialogContainer);
