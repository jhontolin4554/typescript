//
class estudiante{
    edad:number;
    nombre:String;
    apellido:String;
    curso:String;
    constructor(edad_:number,nombre_:String,apellido_:String ,curso_:String){
        this.edad=edad_;
        this.nombre=nombre_;
        this.apellido=apellido_;
        this.curso=curso_;
    }
    inscripcion():void{
        let inscripbir:String;
        inscripbir=this.nombre ;
        console.log(inscripbir);
    }
}
