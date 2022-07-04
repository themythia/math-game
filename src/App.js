import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Final from './components/Final';
import Question from './components/Question';
import Start from './components/Start';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/:questionId' element={<Question />} />
        <Route path='/final' element={<Final />} />
      </Routes>
    </Router>
  );
};
export default App;
