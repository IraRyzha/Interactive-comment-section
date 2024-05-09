const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS":
      return {
        ...state,
        comments: [...action.payload.comments],
      };
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, ...action.payload.comment],
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
