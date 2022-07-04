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
    case 'UPDATE_TOTAL':
      return {
        ...state,
        total: {
          score: state.total.score + action.score,
          questions: state.total.questions + 10,
          answers: state.total.answers + action.answers,
        },
      };
    case 'RESTART':
      return {
        ...state,
        current: {
          ...state.current,
          score: 0,
          questions: 0,
          correctAnswers: 0,
        },
        questions: [],
      };

    default:
      return state;
  }
};
export default statsReducer;
