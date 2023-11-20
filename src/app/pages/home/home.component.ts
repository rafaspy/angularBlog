import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/Post.interface';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  arrPosts: Post[] = [];

  servicio = inject(ServicioService);

  ngOnInit() {
    this.arrPosts = this.servicio.getAll();
  }

}
