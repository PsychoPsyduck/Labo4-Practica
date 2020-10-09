import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import * as firebase from "firebase/app";
import { Actor } from '../clases/actor';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  id;
  constructor(private db: AngularFirestore) {
    this.id = this.consult();
   }

  getAllPeliculas() {
    var lista = Array<any>();
    firebase.firestore().collection("peliculas").get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          let docum = doc.data();
          let pelicula = new Pelicula(docum.id, docum.nombre, docum.tipo, docum.fecha_estreno, docum.cantidad_publico, docum.foto);
          pelicula.uid = doc.id;
          lista.push(pelicula);
      });
    })
    return lista;
  }

  getAllActores() {
    var lista = Array<any>();
    firebase.firestore().collection("actores").get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          let docum = doc.data();
          let actor = new Actor(docum.id, docum.nombre, docum.apellido, docum.sexo, docum.fecha_de_nacimiento, docum.foto);
          lista.push(actor);
      });
    })
    return lista;
  }

  savePelicua(pelicula) {
    console.log(pelicula)
    return this.db.collection("peliculas").add({
      id: pelicula.id,
      nombre: pelicula.nombre,
      tipo: pelicula.tipo,
      fecha_estreno: pelicula.fecha_estreno,
      cantidad_publico: pelicula.cantidad_publico,
      foto: pelicula.foto,
      actor: pelicula.actor.id,
      activa: 1
    });
  }

  saveActor(actor) {
    return this.db.collection("actores").add({
      id: actor.id,
      nombre: actor.nombre,
      apellido: actor.apellido,
      sexo: actor.sexo,
      fecha_de_nacimiento: actor.fecha_de_nacimiento,
      foto: actor.foto,
      activo: 1
    });
  }

  deletePelicua(pelicula) {
    return firebase.firestore().collection("peliculas").doc(pelicula.uid).update({
      activo: 0
    })
  }
  
  consult() {
    var lista = Array<any>();
    firebase.firestore().collection("peliculas").get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          let docum = doc.data();
          let pelicula = new Pelicula(docum.id, docum.nombre, docum.tipo, docum.fecha_estreno, docum.cantidad_publico, docum.foto);
          lista.push(pelicula);
      });
    })
    return lista;
  }
}