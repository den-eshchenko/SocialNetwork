import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { onLogoutTŠ” } from '../../redux/authReduser';

class HeaderC extends React.Component {
  onLogout = () => {
    this.props.onLogoutTŠ”(this.props.auth.isAuth[1]);
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
    onLogoutTŠ”,
  })
  (HeaderC);

export default HeaderContainer;