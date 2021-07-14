import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setCurrentUserTС, setStatusTС, changeStatusUserTC, savePhotoTC, onChangeAboutMeTC} from '../../redux/proffilePageReduser';
import { withRouter } from 'react-router-dom';
import { withAuthRediderct } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileC extends React.Component {
  refreshUser() {
    let userId = this.props.match.params.userID;
    if(!userId){
      userId = this.props.authUserId;
    }
    this.props.setCurrentUserTС(userId)// вывод пользователя в профиль получая его id из http строки, рисую при открытии страницы(при переходе по ссылке - например)
    this.props.setStatusTС(userId); // сетаю в state при отрисовке компоненты Profile status текущего пользователя(авторизованного)
  }

  componentDidMount(){
    this.refreshUser();
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.userID !== prevProps.match.params.userID || this.props.proffilePage.photo !== prevProps.proffilePage.photo){
      this.refreshUser();
    }
  }

  savePhoto = (photo) => {
    this.props.savePhotoTC(photo);
  }
  onChangeAboutMe = (values) => {
    this.props.onChangeAboutMeTC(values);
  }

  changeStatusUser = (status) => {
    this.props.changeStatusUserTC(status);
  }

  render(){
    return (
      <Profile {...this.props.proffilePage} 
        status={this.props.status}
        changeStatusUser={this.changeStatusUser}
        isAuth={!this.props.match.params.userID}
        savePhoto={this.savePhoto}
        isFetching={this.props.isFetching}
        onChangeAboutMe={this.onChangeAboutMe}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    proffilePage: state.proffilePage,
    status: state.proffilePage.status,
    authUserId: state.auth.isAuth[2],
    isFetching: state.proffilePage.isFetching
  }
}

export default compose(
  connect(mapStateToProps, {setCurrentUserTС, setStatusTС, changeStatusUserTC, savePhotoTC, onChangeAboutMeTC}),
  withRouter,
  withAuthRediderct
)(ProfileC);
