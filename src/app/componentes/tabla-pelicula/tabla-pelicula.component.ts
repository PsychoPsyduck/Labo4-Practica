import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EntidadService } from '../../servicios/entidad.service';
import { DataService } from '../../servicios/data.service';
import { Pelicula } from '../../clases/pelicula'
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  public listadoEntidades: Array<Pelicula>;
  // public listadoActores: Array<Actor>;
  @Output() peliculaSeleccionada: EventEmitter <Pelicula> = new EventEmitter();
  @Output() indexPeliculaSeleccionada: EventEmitter <number> = new EventEmitter();

  constructor(private entidadService: EntidadService, 
    private dataService: DataService) 
  { }

  ngOnInit(): void {
    this.listadoEntidades = this.dataService.getAllPeliculas();


    // this.entidadService.obtenerEntidades().subscribe((entidad: any) => {
    //   console.log(entidad);
    //   console.log('console log dentro del observable');
    //   this.listadoActores = entidad;
    // }, error => {
    //   console.log(error);
    // });;
  }

  seleccionarPelicula(pelicula:Pelicula, index: number) {
    console.log(pelicula);
    console.log(index);
    this.peliculaSeleccionada.emit(pelicula);
    this.indexPeliculaSeleccionada.emit(index);
  }

  // cargarTabla() {
  //   this.listadoActores.forEach(element => {
  //     let actor = element;
  //     this.dataService.saveActor(actor);
  //     console.log("cargo bien: " + actor)
  //   });
  // }
}
