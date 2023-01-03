import { v4 as uuidv4 } from 'uuid';
import { Suggestions } from '../../constants/data';
import { Profile, Wrapper } from './footer.styled';

export const Footer = () => {
  return (
    <Wrapper>
      <Profile>
        <img></img>
        <span></span>
      </Profile>
      <p>Suggestions For You</p>
      {Suggestions.map(suggestion => {
        return <div key={uuidv4()}>{suggestion.text}</div>;
      })}
      <p>© 2023 INSTAGRAM FROM META</p>
    </Wrapper>
  );
};
