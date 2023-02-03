import { useContext, useState } from 'react';
import { ContainerBox, PageTitle, PageWidth } from '../../common/common.styled';
import { User } from '../../services/models/user.types';
import UserService from '../../services/userService';
import { ThemeContext } from '../theme/themeProvider';
import { ContainerMsg } from './messages.styled';

export const Messages = () => {
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState<User[]>([]);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PageWidth>
      <PageTitle>Messages</PageTitle>
      <ContainerBox theme={theme}>
        <ContainerMsg>
          <button onClick={getUsers}>get users</button>
          <div>
            {users.map(user => (
              <div key={user.email}>{user.email}</div>
            ))}
          </div>
        </ContainerMsg>
      </ContainerBox>
    </PageWidth>
  );
};
