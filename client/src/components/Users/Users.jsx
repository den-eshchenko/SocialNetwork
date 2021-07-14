import s from './Users.module.css';
import Pagination from '../common/Pagination/Pagination';
import User from './User/User';

let Users = (props) => {
  return (
    <>
      <Pagination
        totalUsersCount={props.totalUsersCount}
        usersCount={props.usersCount}
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage}
      />

      <div className={s.users}>
        {
          props.users.map(u =>
            <User
              u={u}
              isDisabled={props.isDisabled}
              followUnfollow={props.followUnfollow}
              key={u.id}
            />
          )
        }
      </div>
    </>
  )
}

export default Users;