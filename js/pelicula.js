'use sctrict'

//console.log('js cargado');

class Pelicula{
    constructor(){
        //console.log('Se ha creado una película');
        //This es el objeto que ejecuta el codigo
        this.titulo = 'Tiroteo en Mississippi';
        this.pueblo = new Pueblo('TodoPolvo', 'muy polvoriento, en mitad del desierto de Arizona y a donde nadie querría llegar')
        this.narrador = new Narrador()
        this.paco = new Personaje('Paco')
        this.maria = new Personaje('Maria')


        this.iniciar();

    }

    iniciar(){
        document.write('<h1>' + this.titulo + '</h1>');
        document.write('<p>'+this.pueblo.nombre+' era un pueblo '+this.pueblo.descripcion+'</p>')
        this.narrador.hablar('Era una bonita mañana')
        this.paco.hablar('Hola '+this.maria.nombre+'. Hoy hace un día espléndido.')
        this.maria.hablar('Hola '+this.paco.nombre+', la verdad es que sí.')
        this.narrador.hablar('Ambos se miraron un instante y siguieron su amino...')
    }

}

class Pueblo{
    constructor(nombre, descripcion) {
        this.nombre=nombre;
        this.descripcion=descripcion;
    }
}

class Narrador{
    hablar(texto){
        document.write('<p class="negrita">Narrador: </p><p class="narrador">'+texto+'</p>')
    }
}

class Personaje{
    constructor(nombre) {
        this.nombre=nombre
    }
    hablar(texto){
        document.write('<p class="negrita">'+this.nombre+': </p> '+texto+'<br />')
    }
}



new Pelicula()


