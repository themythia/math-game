import { createContext, useEffect, useReducer } from 'react';
import statsReducer from '../reducers/statsReducer';

export const StatsContext = createContext();

const StatsWrapper = ({ children }) => {
  const initialStats = {
    total: {
      score: 0,
      questions: 0,
      answers: 0,
    },
    current: {
      score: 0,
      questions: 0,
      correctAnswers: 0,
      tour: 0,
    },
    questions: [],
  };
  const [stats, dispatch] = useReducer(statsReducer, initialStats);
  // sets localStorage on first visit,
  // gets stats from localStorage if visited before
  useEffect(() => {
    if (Object.keys(JSON.parse(localStorage.getItem('stats'))).length === 0) {
      localStorage.setItem('stats', JSON.stringify(initialStats.total));
    } else
      dispatch({
        type: 'SET_STATS',
        stats: JSON.parse(localStorage.getItem('stats')),
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // updates localStorage on state change
  useEffect(() => {
    if (stats.total.questions > 0)
      localStorage.setItem('stats', JSON.stringify(stats.total));
  }, [stats.total]);

  return (
    <StatsContext.Provider value={{ stats, dispatch }}>
      {children}
    </StatsContext.Provider>
  );
};
export default StatsWrapper;
