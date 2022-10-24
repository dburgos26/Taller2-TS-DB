export class Serie {

    public nombre: string;

    public id: number;

    public canal: string;

    public temporadas: number;

    public descripcion: string;

    public imagen: string;

    public pagina: string;

    /**
     * constructor
     */
    public constructor(id: number, nombre: string, canal: string, temporadas: number, descripcion: string, pagina: string, imagen:string) {
        
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.pagina = pagina;
        
    }

}