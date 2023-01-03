import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PopupMore } from './popup/popup';
import { ThemeContext } from '../theme/themeProvider';
import { HeaderNavigate } from '../../constants/data';
import {
  HeaderContainer,
  HeaderTitle,
  Wrapper,
  ItemText,
  ListItem,
  ListItemContainer,
  NavigationList,
  Nav,
} from './header.styled';

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper theme={theme}>
      <HeaderContainer>
        <HeaderTitle>Catagram</HeaderTitle>
      </HeaderContainer>
      <Nav>
        <NavigationList>
          {HeaderNavigate.map(item => (
            <ListItemContainer key={uuidv4()} theme={theme}>
              <ListItem href={item.link}>
                {item.icon}
                <ItemText>{item.text}</ItemText>
              </ListItem>
            </ListItemContainer>
          ))}
        </NavigationList>
      </Nav>
      <PopupMore />
    </Wrapper>
  );
};
