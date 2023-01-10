import { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { Cat } from '../../redux/reducer/catsSlice.types';
import { RootState } from '../../redux/store';

export const CustomAriaLive = () => {
  const catsFilterNames: Array<Cat> = useSelector((state: RootState) =>
    state.cats.initArr.map(arr => ({
      ...arr,
      value: arr.name,
      label: arr.name,
    }))
  );

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  return (
    <form>
      <label id='aria-label' htmlFor='aria-example-input'>
        Select cat breed
      </label>

      <Select
        aria-labelledby='aria-label'
        inputId='aria-example-input'
        name='aria-live-color'
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
        options={catsFilterNames}
      />
    </form>
  );
};
