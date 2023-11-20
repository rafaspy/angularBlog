import { Injectable } from '@angular/core';
import { Post } from '../interfaces/Post.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  arrPosts: Post[] = [
    {
      titulo: 'En un lugar de la mancha',
      texto: 'probando parrafos nose que escrbir, hola como estas, probando, un dos tres, aja aja aja, xd mucho poco, latiendo latiendo, si.',
      autor: 'autor',
      imagen: 'imagen',
      fecha: '19-09-98',
      categoria: 'categoria',
    },
    {
      titulo: 'Si nos organizamos, comemos todos',
      texto: 'probando parrafos nose que escrbir, hola como estas, probando, un dos tres, aja aja aja, xd mucho poco, latiendo latiendo, si.',
      autor: 'autor',
      imagen: 'imagen',
      fecha: 'fecha',
      categoria: 'categoria',
    }
    , {
      titulo: 'el dia que comi frejoles',
      texto: 'probando parrafos nose que escrbir, hola como estas, probando, un dos tres, aja aja aja, xd mucho poco, latiendo latiendo, si.',
      autor: 'autor',
      imagen: 'imagen',
      fecha: 'fecha',
      categoria: 'categoria',
    }, {
      titulo: 'el dia que no comi frejoles',
      texto: 'probando parrafos nose que escrbir, hola como estas, probando, un dos tres, aja aja aja, xd mucho poco, latiendo latiendo, si.',
      autor: 'autor',
      imagen: 'imagen',
      fecha: 'fecha',
      categoria: 'categoria',
    }, {
      titulo: 'amigos verdes',
      texto: 'probando parrafos nose que escrbir, hola como estas, probando, un dos tres, aja aja aja, xd mucho poco, latiendo latiendo, si.',
      autor: 'autor',
      imagen: 'imagen',
      fecha: 'fecha',
      categoria: 'categoria',
    }

  ];


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
