import { Component, Input, inject } from '@angular/core';

import { Post } from 'src/app/interfaces/Post.interface';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {
  @Input() post!: Post;

  Servicio = inject(ServicioService);

  ngOnInit() {

  }
}
