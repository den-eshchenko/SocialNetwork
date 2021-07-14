// import { ReactComponent } from '*.svg';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import { isInitializationSucsessTC } from './redux/appReduser';
import { onAutorizationTС, onRegistrationTС } from './redux/authReduser';


class App extends React.Component {
  catchAllRejectErrors = (event) => { // обработчик для всех промисов
    alert("error: " + event.reason);
    console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
  }

  componentDidMount(){
    this.props.isInitializationSucsessTC();
    window.addEventListener("unhandledrejection", this.catchAllRejectErrors);
  }

  componentWillUnmount(){
    window.removeEventListener("unhandledrejection", this.catchAllRejectErrors); // не забывать убирать слушатели 
  }

  onRegistration = (formData) => {
    this.props.onRegistrationTС(formData);
  }

  onAutorization = (formData) => {
    this.props.onAutorizationTС(formData);
  }

  render() {
    if(!this.props.isSucsess){
      return <Preloader />
    }

    return (
      <div className="app_wrapper">
        <div><HeaderContainer/></div>
        <div><Nav onRegistration={this.onRegistration} onAutorization={this.onAutorization} auth={this.props.auth}/></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.isAuth,
    logo: state.logo_user,
    isSucsess: state.app.isSucsess
  }
}


export default compose(
  connect(mapStateToProps, {isInitializationSucsessTC, onAutorizationTС, onRegistrationTС}),
  withRouter
)(App);
