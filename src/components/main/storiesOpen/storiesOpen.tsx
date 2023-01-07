import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Stories from 'react-insta-stories';
import { RootState } from '../../../redux/store';
import { CloseStories, StoryStyles } from './storiesOpen.styled';
import { ClearLayer, StoryContainer } from '../stories/stories.styled';
import { Cat } from '../../../redux/reducer/catsSlice.types';
import { Story } from 'react-insta-stories/dist/interfaces';

interface StoriesOpenProps {
  visible: boolean;
  onClose: () => void;
}

export const StoriesOpen = ({ visible = false, onClose }: StoriesOpenProps) => {
  const catsForStories: Array<Cat> = useSelector((state: RootState) =>
    state.cats.initArr.slice(0, 2)
  );
  const catsForStoriesImgs: Story[] = Object.values(
    catsForStories
      .map(({ ...data }) => `${data.image_link}`)
      .map(src => ({ url: src }))
  );
  // console.log(catsForStoriesImgs);

  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  if (!visible) return null;

  return (
    <>
      <ClearLayer onClick={onClose} />
      <StoryContainer>
        <Stories
          width={350}
          height={560}
          defaultInterval={6000}
          keyboardNavigation
          stories={catsForStoriesImgs}
          storyContainerStyles={StoryStyles}
          onAllStoriesEnd={() => onClose()}
        />
        <CloseStories onClick={onClose} />
      </StoryContainer>
    </>
  );
};
