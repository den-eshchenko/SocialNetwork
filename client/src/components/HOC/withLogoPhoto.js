import React from 'react';
import male from '../../assets/images/male.jpg';
import female from '../../assets/images/female.jpg';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    currentUser: state.proffilePage.currentUser[0]    
  }
}

export const withLogoPhoto = (Component) => {
  class LogoPhotoComponent extends React.Component {
    getPhoto = () => {
      if(this.props.currentUser !== undefined){
        return this.props.currentUser.img || (this.props.currentUser.person === "male" && male) || (this.props.currentUser.person === "female" && female);
      }
      return false;
    }
    
    render(){
      return <Component {...this.props} photo={this.getPhoto}/>
    }
  }
  let ConnectLogoPhotoComponent = connect(mapStateToProps)(LogoPhotoComponent);

  return ConnectLogoPhotoComponent;
}
