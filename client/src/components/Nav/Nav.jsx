import s from './Nav.module.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import NoPage from '../NoPage';
import News from '../News/News';
import Settings from '../Settings/Settings';
import Friends from '../Friends/Friends';
import UsersContainers from '../Users/Users.container';
import ProfileContainer from '../Profile/ProfileContainer';
import MusicContainer from '../Music/MusicContainer';
import Login from '../Header/Auth/Login';
import Registration from '../Header/Auth/Registration';
import DialogContainer from '../Dialogs/Dialog/DialogContainer';

function Nav(props) {
  return (
    <div className={s.nav_container}>
      &nbsp;
      <nav className={s.nav}>
        <div><NavLink to="/profile" activeClassName={s.active}>профиль</NavLink></div>
        <div><NavLink to="/music" activeClassName={s.active}>музыка</NavLink></div>
        <div><NavLink to="/users" activeClassName={s.active}>пользователи</NavLink></div>
        <div><NavLink to="/dialogs" activeClassName={s.active}>диалоги</NavLink></div>
        <div><NavLink to="/news" activeClassName={s.active}>новости</NavLink></div>
        <div><NavLink to="/settings" activeClassName={s.active}>настройки</NavLink></div>
      </nav>
      <div className={s.app_wrapper_content}>
        <Switch>
          <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
          <Route exact path="/users" render={() => <UsersContainers />} />
          <Route exact path="/dialogs" render={() => <DialogContainer />} />
          <Route exact path="/news" render={() => <News />} />
          <Route exact path="/music" render={() => <MusicContainer />} />
          <Route exact path="/settings" render={() => <Settings />} />
          <Route exact path="/friends" render={() => <Friends />} />
          <Route path="/nopage" render={() => <NoPage />} />
          <Route path="/login" render={() => <Login {...props} />} />
          <Route path="/registration" render={() => <Registration {...props} />} />
        </Switch>
      </div>
    </div>
  );
}

export default Nav;