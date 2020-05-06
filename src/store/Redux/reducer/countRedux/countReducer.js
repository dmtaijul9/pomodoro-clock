const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "DECREMENT_COUNT":
      return state - 1;
      break;

    default:
      return state;
      break;
  }
};

export default countReducer;
