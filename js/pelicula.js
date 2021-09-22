'use sctrict'

//console.log('js cargado');

class Pelicula{
    constructor(){
        //console.log('Se ha creado una película');
        //This es el objeto que ejecuta el codigo
        this.titulo = 'Tiroteo en Mississippi';
        this.pueblo = new Pueblo('TodoPolvo', 'muy polvoriento, en mitad del desierto de Arizona y a donde nadie querría llegar')



        this.iniciar();

    }

    iniciar(){
        document.write('<h1>' + this.titulo + '</h1>');
        document.write('<p>'+this.pueblo.nombre+' era un pueblo '+this.pueblo.descripcion)
    }

}

class Pueblo{
    constructor(nombre, descripcion) {
        this.nombre=nombre;
        this.descripcion=descripcion;
    }
}




new Pelicula()


