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
import { NotesPage } from './pages/notesPage';
import { SavedPage } from './pages/savedPage';
import { SignInPage } from './pages/signinPage';
import { AppDispatch } from './redux/store';
import { ErrorPage } from './pages/errorPage';
import { SearchPage } from './pages/searchPage';
import { fetchCats } from './redux/reducers/cats/catsSlice';
import { checkAuth } from './redux/reducers/auth/authSlice';

export const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }

    dispatch(fetchCats());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/signin' element={<Navigate to='/' />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/search/:name' element={<SearchPage />} />
        <Route path='/notes' element={<NotesPage />} />
        <Route path='/saved' element={<SavedPage />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};
