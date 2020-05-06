const pauseReducer = (state = false, action) => {
  switch (action.type) {
    case "IS_PAUSE":
      return !state;
      break;
    default:
      return state;
      break;
  }
};

export default pauseReducer;
