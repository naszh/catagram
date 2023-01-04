import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Stories from 'react-insta-stories';
import { RootState } from '../../../redux/store';
import { CloseStories, StoryImage, StoryStyles } from './storiesOpen.styled';

interface StoriesOpenProps {
  visible: boolean;
  onClose: () => void;
}

export const StoriesOpen = ({ visible = false, onClose }: StoriesOpenProps) => {
  const catsForStories = useSelector((state: RootState) => state.cats.initArr);

  const stories2: any = [
    {
      content: () => {
        return <StoryImage src={catsForStories[0]?.url} />;
      },
    },
    {
      content: () => {
        return <StoryImage src={catsForStories[1]?.url} />;
      },
    },
  ];

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
      <Stories
        width={350}
        height={560}
        defaultInterval={6000}
        keyboardNavigation
        stories={stories2}
        storyContainerStyles={StoryStyles}
        onAllStoriesEnd={() => onClose()}
      />
      <CloseStories onClick={onClose} />
    </>
  );
};
