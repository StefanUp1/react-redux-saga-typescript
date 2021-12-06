export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export interface AddPostRequest {
    title: string;
    description: string;
  }
  