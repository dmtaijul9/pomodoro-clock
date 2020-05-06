const breakReducer = (state = 5, action) => {
  switch (action.type) {
    case "INCREMENT_BREAK":
      return state + 1;
      break;
    case "DECREMENT_BREAK":
      return state - 1;
      break;
    default:
      return state;
      break;
  }
};

export default breakReducer;