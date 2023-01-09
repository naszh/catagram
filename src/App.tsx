import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { SignInForm } from './components/signin/signin';
import { SignUpForm } from './components/signup/signup';

import { HomePage } from './pages/homePage';
import { MsgsPage } from './pages/msgsPage';
import { SavedPage } from './pages/savedPage';
import { fetchCats } from './redux/reducer/catsSlice';
import { AppDispatch } from './redux/store';

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/saved' element={<SavedPage />} />
          <Route path='/messages' element={<MsgsPage />} />
          <Route path='/' element={<SignInForm />} />
          <Route path='/signin' element={<Navigate to='/' />} />
          <Route path='/signup' element={<SignUpForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
