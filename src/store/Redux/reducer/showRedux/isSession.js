const isSessionReducer = (state = true, action) => {
  switch (action.type) {
    case "IS_SESSION":
      return !state;
      break;

    default:
      return state;
      break;
  }
};

export default isSessionReducer;
