const sessionReducer = (state = 25, action) => {
    switch (action.type) {
      case "INCREMENT_SESSION":
        return state + 1;
        break;
      case "DECREMENT_SESSION":
        return state - 1;
        break;
      default:
        return state;
        break;
    }
  };
  
  export default sessionReducer;