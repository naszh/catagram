import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { Cat } from '../../redux/reducer/catsSlice.types';

export const Filter = ({ options }: { options: Cat[] }): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  const content: Element | null = document.querySelector('#content');

  const handleSelect = (e: SingleValue<Cat>) => {
    console.log(e?.name);
    content!.innerHTML = `
      <div>${e?.name}</div>
      <div>${e?.origin}</div>
    `;
  };

  return (
    <>
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
          options={options}
          onChange={e => handleSelect(e)}
        />
      </form>
      <div id='content'></div>
    </>
  );
};
