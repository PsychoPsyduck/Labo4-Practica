import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from '../../clases/actor';
import { Pelicula } from '../../clases/pelicula';
import { DataService } from "../../servicios/data.service";

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  form: FormGroup;
  actor: Actor;
  hola: string;
  lastID: number;
  confirmMsj: string;
  errorMsj: string;
  listadoEntidades: Array<Pelicula>;

  constructor(private fb: FormBuilder, private dataService: DataService)
  { this.lastID = 0}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      fecha_estreno: ['', Validators.required],
      cantidad_publico: ['', Validators.required],
      actor: ['', Validators.required]
    });

    this.listadoEntidades = this.dataService.getAllPeliculas();
  }
  get nombre() { return this.form.get('nombre'); }
  get tipo() { return this.form.get('tipo'); }
  get fecha() { return this.form.get('fecha_estreno'); }
  get cantidad() { return this.form.get('cantidad_publico'); }


  actorSeleccionado(actor: Actor) {
    this.form.patchValue({
      actor: actor.nombre
    });

    this.actor = actor;
  }

  guardar() {
    this.listadoEntidades.forEach(element => {
      if(element.id > this.lastID) {
        this.lastID = element.id;
      }
    });

    const { nombre, tipo, fecha_estreno, cantidad_publico, actor } = this.form.value;
    
    if(nombre && tipo && fecha_estreno && cantidad_publico && actor) {
      this.lastID++;
      var newPelicula = new Pelicula(this.lastID, nombre, tipo, fecha_estreno, cantidad_publico, "");
      newPelicula.actor = this.actor;
      if(this.dataService.savePelicua(newPelicula)) {
        this.errorMsj = null;
        this.confirmMsj = "Alta exitosa."
      } else {
        this.errorMsj = "Error. Firebase."
      }
    } else {
      this.errorMsj = "Error. Revise los datos."
    }
  }
 
}
