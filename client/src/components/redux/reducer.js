const initialState = {
  allCoffes: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "COFFES":
      return {
        ...state,
        allCoffes: payload,
      };
      
      default:
      return state;
  }
  
};

export default reducer;
