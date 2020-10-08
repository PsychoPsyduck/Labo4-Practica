export class Actor {
    id :number;
    nombre :string;
    apellido : string;
    sexo: string;
    fecha_de_nacimiento :string;
    foto ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeU642BnF4VE04uUJl4mFKMc95t6F8uDsV-e-3cD5B0cX2MRpn&usqp=CAU';

    

    constructor (id: number, nombre: string, apellido: string, sexo: string, fecha_de_nacimiento: string, foto: string){

        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.sexo=sexo;
        this.fecha_de_nacimiento=fecha_de_nacimiento;
        this.foto = foto;

    }
}
