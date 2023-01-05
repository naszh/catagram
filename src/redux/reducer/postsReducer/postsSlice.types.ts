export interface InitialStateType {
  initArr: Array<any>;
  error: null | string;
}

export type AddPostsType = {
  postsArr: Array<Cat>;
};

export interface Cat {
  _id: string;
  owner: string;
  tags: Array<string>;
  createdAt: string;
  updatedAt: string;
}
