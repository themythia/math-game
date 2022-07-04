import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Final from './components/FinalPage/Final';
import NotSupported from './components/NotSupported';
import Question from './components/QuestionPage/Question';
import PrivateRoute from './components/shared/PrivateRoute';
import Start from './components/StartPage/Start';
import StatsWrapper from './contexts/StatsContext';
import ThemeWrapper from './contexts/ThemeContext';
import useWindowSize from './hooks/useWindowSize';
const App = () => {
  const { width } = useWindowSize();
  return (
    <ThemeWrapper>
      {width < 1024 ? (
        <NotSupported />
      ) : (
        <StatsWrapper>
          <Router>
            <Routes>
              <Route path='/' element={<Start />} />
              <Route
                path='/:questionId'
                element={
                  <PrivateRoute>
                    <Question />
                  </PrivateRoute>
                }
              />
              <Route
                path='/final'
                element={
                  <PrivateRoute>
                    <Final />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Router>
        </StatsWrapper>
      )}
    </ThemeWrapper>
  );
};
export default App;
