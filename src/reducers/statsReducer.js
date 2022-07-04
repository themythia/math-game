const statsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_STATS':
      return {
        ...state,
        total: action.stats,
      };
    default:
      return state;
  }
};
export default statsReducer;
