import {
  Container,
  MainComponent,
  PostBlock,
  SectionComponent,
  StoriesBlock,
} from './main.styled';

export const Main = () => {
  return (
    <MainComponent>
      <SectionComponent>
        <Container>
          <StoriesBlock></StoriesBlock>
        </Container>
        <Container>
          <PostBlock></PostBlock>
        </Container>
      </SectionComponent>
    </MainComponent>
  );
};
