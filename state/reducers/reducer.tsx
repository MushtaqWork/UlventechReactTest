const initialState = {
  data: [],
  loading: true,
  updatedData: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "getData":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case "update":
      return {
        ...state,
        updatedData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
