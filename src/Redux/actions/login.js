import { GET_LOGIN } from '../types';
import api from '../api';

export const userLogin = user => ({
	type:GET_LOGIN,
	user
});

export const loginUser = (req) => dispatch =>
    api.login.loginAction(req).then(data => dispatch(userLogin(data)), err => {
    	console.log(err);
    });
