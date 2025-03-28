import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={''} />
          <Route path='/sign-up' element={ <Signup/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
