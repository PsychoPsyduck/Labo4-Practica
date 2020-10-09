import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  public listadoEntidades: Array<Actor>;

  @Output() actorSeleccionado: EventEmitter <Actor> = new EventEmitter();
  @Output() indexActorSeleccionado: EventEmitter <number> = new EventEmitter();

  constructor(private dataService: DataService) 
  { }

  ngOnInit(): void {
    this.listadoEntidades = this.dataService.getAllActores();
  }

  seleccionarActor(actor:Actor, index: number) {
    console.log(actor);
    console.log(index);
    this.actorSeleccionado.emit(actor);
    this.indexActorSeleccionado.emit(index);
  }
}
