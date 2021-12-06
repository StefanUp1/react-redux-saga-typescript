import { Post, AddPostRequest } from "../../types/posts";

export enum PostsGetActionsEnum {
  GET_POSTS = "GET_POSTS",
  GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
  GET_POSTS_FAILED = "GET_POSTS_FAILED",
}

export enum PostsAddActionsEnum {
  ADD_POST = "ADD_POST",
  ADD_POST_SUCCESS = "ADD_POST_SUCCESS",
  ADD_POST_FAILED = "ADD_POST_FAILED",
}

export type GetPostAction = { type: PostsGetActionsEnum.GET_POSTS };
export type GetPostSuccessAction = {
  type: PostsGetActionsEnum.GET_POSTS_SUCCESS;
  payload: Post[];
};
export type GetPostFailureAction = {
  type: PostsGetActionsEnum.GET_POSTS_FAILED;
  payload: unknown;
};
export type AddPostAction = {
  type: PostsAddActionsEnum.ADD_POST;
  payload: AddPostRequest;
};
export type AddPostSuccessAction = {
  type: PostsAddActionsEnum.ADD_POST_SUCCESS;
  payload: Post;
};
export type AddPostFailureAction = {
  type: PostsAddActionsEnum.ADD_POST_FAILED;
  payload: unknown;
};

export type PostActions =
  | GetPostAction
  | GetPostSuccessAction
  | GetPostFailureAction
  | AddPostAction
  | AddPostSuccessAction
  | AddPostFailureAction;

export const getPosts = () => ({
  type: PostsGetActionsEnum.GET_POSTS,
});

export const getPostsSuccess = (payload: Post[]) => ({
  type: PostsGetActionsEnum.GET_POSTS_SUCCESS,
  payload,
});

export const getPostsFailed = (payload: unknown) => ({
  type: PostsGetActionsEnum.GET_POSTS_FAILED,
  payload,
});

export const addPosts = (payload: AddPostRequest) => ({
  type: PostsAddActionsEnum.ADD_POST,
  payload,
});

export const addPostsSuccess = (payload: Post) => ({
  type: PostsAddActionsEnum.ADD_POST_SUCCESS,
  payload,
});

export const addPostsFailed = (payload: unknown) => ({
  type: PostsAddActionsEnum.ADD_POST_FAILED,
  payload,
});
