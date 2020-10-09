import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  pelicula: Pelicula;
  
  tomarPeliculaParaDetalles(pelicula: Pelicula) {
    this.pelicula = pelicula;
  }

  borrarPelicula(pelicula)
  { 
    if(this.data.deletePelicua(this.pelicula)) {
      console.log("bien");
    } else {
      console.log("mal");
    }

  }
}
