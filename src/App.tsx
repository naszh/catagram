import { PageContainer } from './App.styled';
import { Footer } from './layouts/footer/footer';
import { Header } from './layouts/header/header';
import { Main } from './layouts/main/main';

function App() {
  return (
    <>
      <Header />
      <PageContainer>
        <Main />
        <Footer></Footer>
      </PageContainer>
    </>
  );
}

export default App;
