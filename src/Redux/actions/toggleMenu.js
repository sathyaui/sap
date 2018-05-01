import { TOGGLE_MENU } from '../types';

export const setToggleMenu = status => ({
	type:TOGGLE_MENU,
	status
});

export const toggleMenu = status => dispatch => {
	dispatch(setToggleMenu(status));
}
