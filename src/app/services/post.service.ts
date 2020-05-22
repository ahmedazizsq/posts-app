import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable()
export class postService {
  constructor(private http: HttpClient) {}

  getAllPosts = () => {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  };
  getPostById = (id: number) => {
    return this.http.get(`http://jsonplaceholder.typicode.com/posts/${id}`, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  };
  editPost = (id: number, post: Post) => {
    return this.http.patch(
      `http://jsonplaceholder.typicode.com/posts/${id}`,
      post
    );
  };
  deletePost = (id: number) => {
    return this.http.delete(`http://jsonplaceholder.typicode.com/posts/${id}`);
  };
}
