import { Component, inject } from '@angular/core';
import { Post } from './interfaces/Post.interface';
import { ServicioService } from './services/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrPosts: Post[] = [];

  servicio = inject(ServicioService);

  ngOnInit() {
    this.arrPosts = this.servicio.getAll();
  }



}
