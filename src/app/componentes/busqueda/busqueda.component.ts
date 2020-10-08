import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  pelicula: Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

  tomarPeliculaParaDetalles(pelicula: Pelicula) {
    this.pelicula = pelicula;
    console.info(this.pelicula)
  }
}
