import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Signup from './pages/Signup';
import UserHome from './pages/UserHome';
import Signin from './pages/Signin';
import PrivateRoute from './components/PrivateRoute';
import RequestForm from './pages/RequestForm';

function App() {

  const { currentUser } = useSelector(state => state.user);

  return (  
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/'        element={ currentUser ? <Navigate to='/user' /> : <Signin /> } />
        <Route path='/sign-up' element={ currentUser ? <Navigate to='/user' /> : <Signup /> } />
        <Route path='/sign-in' element={ currentUser ? <Navigate to='/user' /> : <Signin /> } />
        <Route element={ <PrivateRoute /> } >
          <Route path='/user' element={ <UserHome /> } />
          <Route path='/request' element={ <RequestForm /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
