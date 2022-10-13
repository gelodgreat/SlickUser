export const usersListReducer = (
  state = {
    users: [],
    isLoading: false,
    error: null,
  },
  action: any,
) => {
  switch (action.type) {
    case 'LOAD_USERS_START':
      return {...state, isLoading: true};
    case 'LOAD_USERS_SUCCESS':
      const localUsers = state?.users || [];
      return {
        ...state,
        users: [...action.payload, ...localUsers],
        isLoading: false,
      };
    case 'LOAD_USERS_FAILURE':
      return {...state, error: action.payload, isLoading: false};
    case 'UPDATE_USERS_RESULT': {
      return {...state, Users: action.users};
    }
    case 'CLEAR_USERS_LIST': {
      return {};
    }
    default:
      return state;
  }
};
