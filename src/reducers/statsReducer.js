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
          questions: 1,
        },
        questions: generateQuestions(),
      };
    case 'ADD_TRUE':
      console.log('action.index', action.index);
      return {
        ...state,
        current: {
          ...state.current,
          correctAnswers: state.current.correctAnswers + 1,
          score: state.current.score + action.score,
        },
        questions: state.questions.map((question, index) =>
          index === action.index
            ? {
                ...question,
                result: true,
              }
            : question
        ),
      };
    case 'ADD_FALSE':
      console.log('action.index', action.index);

      return {
        ...state,
        questions: state.questions.map((question, index) =>
          index === action.index
            ? {
                ...question,
                result: false,
              }
            : question
        ),
      };
    case 'INCREASE_QUESTION':
      return {
        ...state,
        current: {
          ...state.current,
          questions: state.current.questions + 1,
        },
      };

    default:
      return state;
  }
};
export default statsReducer;
