
import { apiGetAllUsers } from "../../../api/users";
import actions from './users.actions'

export const loadUsersAsync = () => (dispatch) => {
    dispatch(actions.usersLoadStart());
    apiGetAllUsers()
    .then((response) => dispatch(actions.usersLoadSuccess(response.data)))
    .catch((error) => dispatch(actions.usersLoadError(error.message)))
}
