import {
  AccountImg,
  AccountWrapper,
  FooterText,
  FullName,
  Profile,
  UserContainer,
  UserName,
  Wrapper,
  OpenProfile,
} from './footer.styled';

export const Footer = () => {
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
        <OpenProfile to='/'>open</OpenProfile>
      </Profile>
      <FooterText>© 2023 CATAGRAM FROM NASZH</FooterText>
    </Wrapper>
  );
};
