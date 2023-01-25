import { useEffect } from 'react';
import Stories from 'react-insta-stories';
import { CloseStories, StoryStyles } from './storiesOpen.styled';
import { ClearLayer, StoryContainer } from '../stories/stories.styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

interface StoriesOpenProps {
  visible: boolean;
  onClose: () => void;
}

export const StoriesOpen = ({ visible = false, onClose }: StoriesOpenProps) => {
  const storyImage = useSelector((state: RootState) => {
    return [{ url: state.cats.storyImage }];
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
          stories={storyImage}
          storyContainerStyles={StoryStyles}
          onAllStoriesEnd={() => onClose()}
        />
        <CloseStories onClick={onClose} />
      </StoryContainer>
    </>
  );
};
