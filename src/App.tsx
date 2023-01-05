import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HomePage } from './pages/home';
import { fetchPosts } from './redux/reducer/postsReducer/postsSlice';
import { fetchStories } from './redux/reducer/storiesReducer/storiesSlice';
import { AppDispatch } from './redux/store';

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchStories());
    dispatch(fetchPosts());
  }, [dispatch]);

  return <HomePage />;
};

export default App;
