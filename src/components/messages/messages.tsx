import { useContext } from 'react';
import { ContainerBox, PageTitle, PageWidth } from '../../common/common.styled';
import { ThemeContext } from '../theme/themeProvider';
import { ContainerMsg } from './messages.styled';

export const Messages = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <PageWidth>
      <PageTitle>Messages</PageTitle>
      <ContainerBox theme={theme}>
        <ContainerMsg></ContainerMsg>
      </ContainerBox>
    </PageWidth>
  );
};
