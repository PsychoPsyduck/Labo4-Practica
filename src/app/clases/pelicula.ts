export class Pelicula {
    id :number;
    nombre :string;
    tipo : string;//   { terror , comedia, amor ,otros }
    fecha_estreno :string;
    cantidad_publico: number;
    foto ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeU642BnF4VE04uUJl4mFKMc95t6F8uDsV-e-3cD5B0cX2MRpn&usqp=CAU';

    

    constructor (id :number, nombre :string, tipo : string, fecha_estreno :string,cantidad_publico: number, foto : string){

        this.id=id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.fecha_estreno=fecha_estreno;
        this.cantidad_publico=cantidad_publico;
        this.foto = foto;

    }
}
