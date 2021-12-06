import { takeEvery, all, call, put, takeLeading } from "redux-saga/effects";
import {
  PostsGetActionsEnum,
  getPostsSuccess,
  getPostsFailed,
  PostsAddActionsEnum,
  addPostsSuccess,
  addPostsFailed,
  AddPostAction,
} from "./Posts.actions";
import { getPosts, addPost } from "../../services/posts";
import { Post } from "../../types/posts";

function* getPostsSaga() {
  try {
    const response: Post[] = yield call(getPosts);
    yield put(getPostsSuccess([...response]));
  } catch (error) {
    yield put(getPostsFailed(error.message));
  }
}

function* addPostsSaga(action: AddPostAction) {
  try {
    const response: Post = yield call(addPost, action.payload);
    yield put(addPostsSuccess({ ...action.payload, ...response }));
  } catch (error) {
    yield put(addPostsFailed(error.message));
  }
}

function* getPostsWatcher() {
  yield takeEvery(PostsGetActionsEnum.GET_POSTS, getPostsSaga);
}

function* addPostsWatcher() {
  yield takeLeading(PostsAddActionsEnum.ADD_POST, addPostsSaga);
}

export default function* postsSaga() {
  yield all([getPostsWatcher(), addPostsWatcher()]);
}
