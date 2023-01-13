import { useEffect } from 'react';
import Stories from 'react-insta-stories';
import { CloseStories, StoryStyles } from './storiesOpen.styled';
import { ClearLayer, StoryContainer } from '../stories/stories.styled';
import { Cat } from '../../../redux/reducer/catsSlice.types';
import { Story } from 'react-insta-stories/dist/interfaces';

interface StoriesOpenProps {
  visible: boolean;
  onClose: () => void;
  cats: Cat[];
}

export const StoriesOpen = ({
  visible = false,
  onClose,
  cats,
}: StoriesOpenProps) => {
  const stories: Story[] = cats.map((cat: Cat) => {
    return { url: cat.image_link };
  });

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
          stories={stories}
          storyContainerStyles={StoryStyles}
          onAllStoriesEnd={() => onClose()}
        />
        <CloseStories onClick={onClose} />
      </StoryContainer>
    </>
  );
};
