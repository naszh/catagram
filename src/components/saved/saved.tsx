import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const Saved = () => {
  const like = useSelector((state: RootState) => state.cats.counter);

  return (
    <>
      <div>{like} likes</div>
    </>
  );
};
