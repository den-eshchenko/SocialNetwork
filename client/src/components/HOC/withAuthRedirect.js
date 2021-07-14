import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateForAuthRedirect = (state) => {
  return{
    auth: state.auth.isAuth
  }
}

export const withAuthRediderct = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
        if (this.props.auth[1] === "guest" || this.props.auth[1] === undefined) {return <Redirect to='/login' />} 

        return <Component {...this.props}/>
    }
  }
  let ConnectRedirectComponent = connect(mapStateForAuthRedirect)(RedirectComponent); 

  return ConnectRedirectComponent;
}