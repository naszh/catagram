import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HomePage } from './pages/home';
import { fetchCats } from './redux/reducer/catsSlice';
import { AppDispatch } from './redux/store';

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return <HomePage />;
};

export default App;
