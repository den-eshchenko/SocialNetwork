import { createSelector } from 'reselect';

// export const getUsers = (state) => {
//     return state.usersPage.users.filter(u => true);
// }

const getUsers = (state) => {
    return state.usersPage.users;
}
export const getUsersReselector = createSelector(getUsers, (users) => {
    return users.filter(u => true);// вернуть всех
});