const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, isSignedIn: true, userId: action.payload }
    case 'SIGN_OUT':
      return { ...state, isSignedIn: false, userId: null } //update status, create a new object
    default:
      return state;
  }
};
