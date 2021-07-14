import { compose } from 'redux';
import Preloader from '../../common/Preloader/Preloader';
import { withLogoPhoto } from '../../HOC/withLogoPhoto';
import AboutMe from './AboutMe';
import ProfileStatus from './ProfileStatus';


function Content(props) {
  if(!props.currentUser){
    return (
      <Preloader />
    );
  }

  return (
    <div>
        <b>Профиль</b>
        <div><b>Статус:</b> <ProfileStatus status={props.status} changeStatusUser={props.changeStatusUser} /></div>

        <div>
          <AboutMe 
            fullName={props.currentUser.fullName}
            isFetching={props.isFetching}
            photo={props.photo}
            isAuth={props.isAuth}
            aboutMe={props.currentUser.aboutMe}
            lookingForAJob={props.currentUser.lookingForAJob}
            contacts={props.currentUser.contacts}
            savePhoto={props.savePhoto}
            onChangeAboutMe={props.onChangeAboutMe}
          />
        </div>
    </div>
  );
}

export default compose(withLogoPhoto)(Content);