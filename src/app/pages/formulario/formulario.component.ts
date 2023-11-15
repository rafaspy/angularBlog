import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup;

  servicio = inject(ServicioService)

  constructor() {

    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),

    })
  }

  onSubmit() {
    this.servicio.create(this.formulario.value)

  }
}
