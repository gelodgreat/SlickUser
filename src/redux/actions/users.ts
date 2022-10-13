import axios from 'axios';
import {RANDOM_API_URL_USERS} from 'const/api';

export const updateUsersList = (users: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'UPDATE_USERS_RESULT',
      users,
    });
  };
};

export const loadUsers = (searchTerm: string, perPage: number) => {
  return async (dispatch, getState) => {
    try {
      dispatch({type: 'LOAD_USERS_START'});
      const encodedSearch = encodeURI(searchTerm || '');
      const url = `${RANDOM_API_URL_USERS}?per_page=${perPage || 10}${
        encodedSearch.length > 0 && `&by_name=${encodedSearch}`
      }`;
      const usersResults = await axios.get(url);
      dispatch({
        type: 'LOAD_USERS_SUCCESS',
        payload: [...usersResults.data],
      });
    } catch (error) {
      dispatch({type: 'LOAD_USERS_FAILURE', payload: error});
    }
  };
};

export const clearUsersList = () => {
  return (dispatch: any) => {
    dispatch({
      type: 'CLEAR_USERS_LIST',
    });
  };
};
