import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Final from './components/FinalPage/Final';
import Question from './components/QuestionPage/Question';
import Start from './components/StartPage/Start';
import StatsWrapper from './contexts/StatsContext';
import ThemeWrapper from './contexts/ThemeContext';
const App = () => {
  return (
    <ThemeWrapper>
      <StatsWrapper>
        <Router>
          <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/:questionId' element={<Question />} />
            <Route path='/final' element={<Final />} />
          </Routes>
        </Router>
      </StatsWrapper>
    </ThemeWrapper>
  );
};
export default App;
