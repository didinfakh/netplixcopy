const initialState = {
  movieSearch: '',
};
const reducer = (state = initialState, event) => {
  if (event.type === 'SEARCH') {
    return {
      ...state,
      movieSearch: event.value,
    };
  }
  return state;
};
export default reducer;
