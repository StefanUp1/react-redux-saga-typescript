import api from "./api";
import { Post, AddPostRequest } from "../types/posts";

export const getPosts = async () =>
  api.get<Post[]>("https://jsonplaceholder.typicode.com/posts");

export const addPost = async (data: AddPostRequest) =>
  api.post<string, Post>(
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify(data)
  );
