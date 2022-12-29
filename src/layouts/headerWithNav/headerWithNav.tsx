import { v4 as uuidv4 } from 'uuid';
import { HeaderNavigate, Popup } from '../../constants/data';
import {
  HeaderContainer,
  HeaderTitle,
  Wrapper,
  ItemIcon,
  ItemText,
  ListItem,
  ListItemContainer,
  NavigationList,
  PopupMore,
  Nav,
} from './headerWithNav.styled';

export const HeaderWithNav = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <HeaderTitle>Catagram</HeaderTitle>
      </HeaderContainer>
      <Nav>
        <NavigationList>
          {HeaderNavigate.map(item => (
            <ListItemContainer key={uuidv4()}>
              <ListItem href={item.link}>
                <ItemIcon>{item.icon}</ItemIcon>
                <ItemText>{item.text}</ItemText>
              </ListItem>
            </ListItemContainer>
          ))}
        </NavigationList>
      </Nav>
      <PopupMore>
        <ListItem>
          <ItemIcon>{Popup.icon}</ItemIcon>
          <ItemText>{Popup.text}</ItemText>
        </ListItem>
      </PopupMore>
    </Wrapper>
  );
};
