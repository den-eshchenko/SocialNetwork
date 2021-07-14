import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { onLogoutTС } from '../../redux/authReduser';

class HeaderC extends React.Component {
  onLogout = () => {
    this.props.onLogoutTС(this.props.auth.isAuth[1]);
  }
  render() {
    return (
      <Header {...this.props} onLogout={this.onLogout}/>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const HeaderContainer = connect(mapStateToProps, 
  { 
    onLogoutTС,
  })
  (HeaderC);

export default HeaderContainer;