import {
  PostActions,
  PostsGetActionsEnum,
  PostsAddActionsEnum,
} from "./Posts.actions";
import { Post } from "../../types/posts";

interface State {
  isLoading: boolean;
  posts: Post[];
  error: unknown;
}

const initialState: State = {
  isLoading: false,
  posts: [],
  error: null,
};

const reducer = (state = initialState, action: PostActions) => {
  switch (action.type) {
    case PostsGetActionsEnum.GET_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case PostsGetActionsEnum.GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case PostsGetActionsEnum.GET_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case PostsAddActionsEnum.ADD_POST:
      return {
        ...state,
        isLoading: true,
      };
    case PostsAddActionsEnum.ADD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, action.payload],
      };
    case PostsAddActionsEnum.ADD_POST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
