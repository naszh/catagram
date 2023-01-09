import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 270px;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
`;

export const AccountWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const AccountImg = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
`;

export const UserContainer = styled.div``;

export const UserName = styled.p`
  margin: 0;
  font-weight: bold;
  cursor: pointer;
`;

export const FullName = styled.span``;

export const FooterText = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;
