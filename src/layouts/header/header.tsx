import { v4 as uuidv4 } from 'uuid';
import { HeaderNavigate, Popup } from '../../constants/data';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderWrapper,
  ItemIcon,
  ItemText,
  ListItem,
  ListItemContainer,
  NavigationList,
  PopupMore,
} from './header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderTitle>Catagram</HeaderTitle>
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
        <PopupMore>
          <ListItem>
            <ItemIcon>{Popup.icon}</ItemIcon>
            <ItemText>{Popup.text}</ItemText>
          </ListItem>
        </PopupMore>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
