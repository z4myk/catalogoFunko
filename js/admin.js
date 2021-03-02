import {Funko} from './funkoClass.js';

let listaFunkopop = [];
const modalFunko = new bootstrap.Modal(document.getElementById('exampleModal'))
// function agregarFunkopop(){}

let btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', () => {
    // mostrar ventana modal
    modalFunko.show();
});

// buscar los datos del localStorage
leerDatos();

window.agregarFunkopop = function (event){
 
    // el objetivo de esta funcion es agregar un funkopop nuevo en localstorage 
    event.preventDefault();
    console.log('estamos dentro de la funcion agregar funkopop')
    //traer los valores del formulario que ya estan validados 

    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let numSerie = document.getElementById('numSerie').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen = document.getElementById('imagen').value;

    let nuevoFunkopop = new Funko(codigo, nombre, numSerie, categoria, descripcion, imagen);
// agregar el nuevo objeto en el arreglo de funkopop
    listaFunkopop.push(nuevoFunkopop);

    console.log(listaFunkopop);
    // guardar datos en localStorage
    localStorage.setItem('listaFunkoKey', JSON.stringify(listaFunkopop));
    limpiarFormulario();
    Swal.fire(
        'Nuevo producto',
        'Funkopop se agrego correctamente',
        'success'
      )
      //cerrar la ventana modal
        modalFunko.hide();
};

function limpiarFormulario(){
    // aqui estamos reseteando los valores del formulario
    let formulario = document.getElementById('formFunkopop');
    formulario.reset();
    document.getElementById('codigo').className = "form-control";
    document.getElementById('nombre').className = "form-control";
    document.getElementById('numSerie').className = "form-control";
    document.getElementById('categoria').className = "form-control";
    document.getElementById('descripcion').className = "form-control";
}

function leerDatos(){
    // leer datos del localStorage
    if(localStorage.length > 0){
        //traer datos del localStorage
        let _listaFunkopop = JSON.parse(localStorage.getItem('listaFunkoKey'));
        console.log(_listaFunkopop);
    }
}
