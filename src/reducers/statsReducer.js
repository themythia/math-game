import generateQuestions from '../utils/generateQuestions';

const statsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_STATS':
      return {
        ...state,
        total: action.stats,
      };
    case 'GENERATE_QUESTIONS':
      return {
        ...state,
        current: {
          ...state.current,
          tour: state.current.tour + 1,
        },
        questions: generateQuestions(),
      };
    default:
      return state;
  }
};
export default statsReducer;
