import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Input() borrado: number;
  @Output() eventoBorrarPelicula = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  
  borrarPelicula(pelicula) {
    this.eventoBorrarPelicula.emit(pelicula);
    this.pelicula = null; 
  }
}
