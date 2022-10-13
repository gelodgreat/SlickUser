export const currentUserReducer = (
  state = {
    detailId: '',
  },
  action: any,
) => {
  switch (action.type) {
    case 'SET_USER_DETAIL': {
      return {...state, detailsId: action.detail};
    }
    case 'CLEAR_CURRENT_USER': {
      return {};
    }
    default:
      return state;
  }
};
