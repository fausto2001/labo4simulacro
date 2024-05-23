export enum tipo{
     terror,
     comedia,
     amor,
     otros   
}

export class Pelicula {

    public id : string;
    public nombre : string;
    public tipo : tipo;
    public fechaEstreno : string;
    public ctdPublico : number;
    public foto : string;


    constructor()
    {
        this.id = '0';
        this.nombre = '';
        this.tipo = tipo.otros;
        this.fechaEstreno = '';
        this.ctdPublico = 0;
        this.foto = '';
    }

    
}
