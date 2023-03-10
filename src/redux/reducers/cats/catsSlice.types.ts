export interface Cat {
  children_friendly: number;
  family_friendly: number;
  general_health: number;
  grooming: number;
  image_link: string;
  intelligence: number;
  length: string;
  max_life_expectancy: number;
  max_weight: number;
  min_life_expectancy: number;
  min_weight: number;
  name: string;
  origin: string;
  other_pets_friendly: number;
  playfulness: number;
  shedding: number;
  id: string;
  isLiked: boolean;
  value: string;
  label: string | JSX.Element;
  isViewed: boolean;
}

export interface InitialStateType {
  initArr: Array<Cat>;
  filteredArr: Array<Cat> | null;
  stories: Array<Cat>;
  storyImage: string;
  offset: number;
  counter: number;
  loading: boolean;
  error: null | string;
}
