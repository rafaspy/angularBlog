import { Injectable } from '@angular/core';
import { Post } from '../interfaces/Post.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  arrPosts: Post[] = [
    {
      titulo: 'En un lugar de la mancha',
      texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, reiciendis. Amet architecto quas, dicta cupiditate animi quis placeat ratione iusto optio porro enim nulla nisi debitis quasi quo, voluptate maiores!',
      autor: 'autor',
      imagen: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
      fecha: '17 de julio, 1936',
      categoria: 'categoria',
    },
    {
      titulo: 'Si nos organizamos, comemos todos',
      texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, reiciendis. Amet architecto quas, dicta cupiditate animi quis placeat ratione iusto optio porro enim nulla nisi debitis quasi quo, voluptate maiores!',
      autor: 'autor',
      imagen: 'imagen',
      fecha: '17 de julio, 1936',
      categoria: 'categoria',
    }
    , {
      titulo: 'El dia que comi frejoles',
      texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, reiciendis. Amet architecto quas, dicta cupiditate animi quis placeat ratione iusto optio porro enim nulla nisi debitis quasi quo, voluptate maiores!',
      autor: 'autor',
      imagen: 'imagen',
      fecha: '17 de julio, 1936',
      categoria: 'categoria',
    }, {
      titulo: 'El dia que no comi frejoles',
      texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, reiciendis. Amet architecto quas, dicta cupiditate animi quis placeat ratione iusto optio porro enim nulla nisi debitis quasi quo, voluptate maiores!',
      autor: 'autor',
      imagen: 'imagen',
      fecha: '17 de julio, 1936',
      categoria: 'categoria',
    }, {
      titulo: 'Amigos verdes',
      texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, reiciendis. Amet architecto quas, dicta cupiditate animi quis placeat ratione iusto optio porro enim nulla nisi debitis quasi quo, voluptate maiores!',
      autor: 'autor',
      imagen: 'imagen',
      fecha: '17 de julio, 1936',
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
