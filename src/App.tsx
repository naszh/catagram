import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { SignUpPage } from './pages/signupPage';
import { HomePage } from './pages/homePage';
import { MsgsPage } from './pages/msgsPage';
import { SavedPage } from './pages/savedPage';
import { SignInPage } from './pages/signinPage';
import { fetchCats } from './redux/reducer/catsSlice';
import { AppDispatch } from './redux/store';
import { ErrorPage } from './pages/errorPage';
import { SearchPage } from './pages/searchPage';
import { CreatePage } from './pages/createPage';

export const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/signin' element={<Navigate to='/' />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/search/:name' element={<SearchPage />} />
          <Route path='/messages' element={<MsgsPage />} />
          <Route path='/saved' element={<SavedPage />} />
          <Route path='/create' element={<CreatePage />} />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};
