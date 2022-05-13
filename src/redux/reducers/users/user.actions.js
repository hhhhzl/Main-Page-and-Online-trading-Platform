import { formatMuiErrorMessage } from '@material-ui/utils'
import actionTypes from './users.actionTypes'

const userLoadStart = () => ({
    type: actionTypes.USERS_LOAD_START
})

const usersLoadSuccess = (users) => ({
    type: actionTypes.USERS_LOAD_SUCCESS,
    payload: users
})

const usersLoadError = (errorMessage) => ({
    type: actionTypes.USERS_LOAD_ERRROR,
    payload: errorMessage
})

export default{
    userLoadStart,
    usersLoadSuccess,
    usersLoadError
}