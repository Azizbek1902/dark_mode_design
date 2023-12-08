const initialState = {
  darkMode: false,
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DARKMODE":
      return {
        ...state,
        darkMode: state.darkMode ? false : true,
      };
    default:
      return state;
  }
};
export default productReducer;
