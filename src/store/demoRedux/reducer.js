const initialState = {
  number: 10,
  name: "ABC",
  age: 20,
};

export const demoReduxReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_NUMBER": {
      state.number = state.number + action.payload;
      return { ...state };
    }
    case "DECREASE_NUMBER": {
      state.number = state.number - action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
