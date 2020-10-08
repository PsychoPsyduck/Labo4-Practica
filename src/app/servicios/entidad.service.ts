import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  private urlActores = environment.urlActores;
  public usuario;

  constructor(private http: HttpClient) { }

  public obtenerEntidades() {
    var retorno = this.http.get(this.urlActores);
    console.log(retorno);
    return retorno;
  }
}
