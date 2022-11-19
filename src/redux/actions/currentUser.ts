export const currentUser = (detail: string | number) => {
  return (dispatch: any) => {
    dispatch({
      type: 'SET_USER_DETAIL',
      detail,
    });
  };
};

export const clearCurrentUser = () => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_CURRENT_USER',
      detail: {},
    });
  };
};
