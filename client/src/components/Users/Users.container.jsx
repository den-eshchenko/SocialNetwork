import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { getUsersTC, followUnfollowTC } from '../../redux/usersPageReduser';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRediderct } from '../HOC/withAuthRedirect';
import { compose } from 'redux';
import { getUsersReselector} from '../../redux/selector';

class UsersC extends React.Component {
  onPageChanged = (pageNumber) => {
    this.props.getUsersTC(pageNumber);
  }
  followUnfollow = (userId) => {
    this.props.followUnfollowTC(userId);
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users
          totalUsersCount={this.props.totalUsersCount}
          usersCount={this.props.usersCount}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          users={this.props.users}
          isDisabled={this.props.isDisabled}
          followUnfollow={this.followUnfollow}

        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersReselector(state),
    pagesCount: state.usersPage.pagesCount,
    usersCount: state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    isDisabled: state.usersPage.isDisabled,
  }
}

export default compose(
  connect(mapStateToProps, {getUsersTC, followUnfollowTC}),
  withAuthRediderct
)(UsersC);
