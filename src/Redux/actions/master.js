import { FETCH_MASTER_DATA } from '../types';
import api from '../api';

export const setMasterData = master => ({
	type:FETCH_MASTER_DATA,
	master
});

export const fetchMasterData = () => dispatch =>
    api.master.fetchMasterAction().then(data => dispatch(setMasterData(data)));