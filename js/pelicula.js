'use sctrict'

//console.log('js cargado');

class Pelicula{
    constructor(){
        //console.log('Se ha creado una película');
        //This es el objeto que ejecuta el codigo
        this.titulo = 'Tiroteo en Mississippi'

        this.iniciar();

    }

    iniciar(){
        document.write('<h1>' + this.titulo + '</h1>')
    }

}
new Pelicula()


