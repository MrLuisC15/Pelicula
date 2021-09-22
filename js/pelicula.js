'use sctrict'

//console.log('js cargado');

class Pelicula{
    constructor(){
        //console.log('Se ha creado una película');
        //This es el objeto que ejecuta el codigo
        this.titulo = 'Tiroteo en Mississippi';
        this.pueblo = new Pueblo('TodoPolvo', 'muy polvoriento, en mitad del desierto de Arizona y a donde nadie querría llegar')
        this.narrador = new Narrador()
        this.paco = new PersonajeBueno('Paco')
        this.maria = new PersonajeBueno('Maria')
        this.morgan = new PersonajeMalo('Morgan')


        this.iniciar();

    }

    iniciar(){
        document.write('<h1>' + this.titulo + '</h1>');
        document.write('<p>'+this.pueblo.nombre+' era un pueblo '+this.pueblo.descripcion+'</p>')
        this.narrador.hablar('Era una bonita mañana')
        this.paco.hablar('Hola '+this.maria.nombre+'. Hoy hace un día espléndido.')
        this.maria.hablar('Hola '+this.paco.nombre+', la verdad es que sí.')
        this.narrador.hablar('Ambos se miraron un instante y siguieron su camino...')
        this.narrador.hablar('Aparece un sujeto estraño en el pueblo con un sombrero de copa')
        this.morgan.hablar('Vaya basura de pueblo...')
        this.morgan.hablar('¡Eh tú! ¡Pringao! Dame ese caballo y la cartera')
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
        document.write('<p class="narrador">*'+texto+'*</p>')
    }
}

class Personaje{
    constructor(nombre) {
        this.nombre=nombre
    }
    
}

class PersonajeBueno extends Personaje{
    hablar(texto){
        document.write('<p class="negrita">'+this.nombre+': </p><p class="bueno">'+texto+'</p>')
    }
}

class PersonajeMalo extends Personaje{
    hablar(texto){
        document.write('<p class="negrita">'+this.nombre+': </p><p class="malo">'+texto+'</p>')
    }
}

class Arma{
    constructor(arma, balas) {
        this.arma=arma
        this.balas=balas
    }
}


new Pelicula()


