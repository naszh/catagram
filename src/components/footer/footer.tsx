import { useDispatch } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/reducers/auth/authSlice';
import {
  AccountImg,
  AccountWrapper,
  FooterText,
  FullName,
  Profile,
  UserContainer,
  UserName,
  Wrapper,
  OutProfile,
} from './footer.styled';

export const Footer = () => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Profile>
        <AccountWrapper>
          <AccountImg src='/favicon.png' alt='account photo' />
          <UserContainer>
            <UserName>ri4ik</UserName>
            <FullName>Riccio</FullName>
          </UserContainer>
        </AccountWrapper>
        <OutProfile
          onClick={async () => {
            await dispatch(logout());
            navigate('/signin', { replace: true });
          }}
        >
          logout
        </OutProfile>
      </Profile>
      <FooterText>© 2023 CATAGRAM FROM NASZH</FooterText>
    </Wrapper>
  );
};
