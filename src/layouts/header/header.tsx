import { v4 as uuidv4 } from 'uuid';
import { PopupMore } from '../../components/popup/popup';
import { HeaderNavigate } from '../../constants/data';
import {
  HeaderContainer,
  HeaderTitle,
  Wrapper,
  ItemIcon,
  ItemText,
  ListItem,
  ListItemContainer,
  NavigationList,
  Nav,
} from './header.styled';

export const Header = () => {
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
      <PopupMore />
    </Wrapper>
  );
};
