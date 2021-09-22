'use sctrict'

//console.log('js cargado');

class Pelicula{
    constructor(){
        //console.log('Se ha creado una película');
        //This es el objeto que ejecuta el codigo
        this.titulo = 'Tiroteo en Mississippi'

        iniciar()

    }
    iniciar(){
        document.write(this.titulo)
    }

}
new Pelicula()


