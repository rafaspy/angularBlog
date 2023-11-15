import { Injectable } from '@angular/core';
import { Post } from '../interfaces/Post.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  arrPosts: Post[] = [];


  constructor() { }

  create(post: Post) {
    this.arrPosts.push(post);

  }

  getAll() {
    return this.arrPosts;

  }

  getByCategoria(cat: string) {
    return this.arrPosts.filter(post => post.categoria === cat)
  }


}
