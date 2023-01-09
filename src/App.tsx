import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/homePage';
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
          <Route path='/' element={<HomePage />} />
          <Route path='/saved' element={<SavedPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
