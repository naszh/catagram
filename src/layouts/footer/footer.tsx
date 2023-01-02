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
        return <div>{suggestion.text}</div>;
      })}
      <p>© 2023 INSTAGRAM FROM META</p>
    </Wrapper>
  );
};
