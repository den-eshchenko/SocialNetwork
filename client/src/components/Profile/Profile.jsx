import s from './Profile.module.css';
import Content from './Content/Content';

function Profile(props) {
  return (
    <div className={s.proffile}>
      <Content 
        currentUser={props.currentUser} 
        status={props.status} 
        changeStatusUser={props.changeStatusUser}
        isAuth={props.isAuth}
        savePhoto={props.savePhoto}
        isFetching={props.isFetching}
        onChangeAboutMe={props.onChangeAboutMe}
      />
    </div>
  );
}

export default Profile;