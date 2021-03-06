import {Funko} from './funkoClass.js';
import { validarCodigo, validarText, validarSerie, validarCategoria, validarDescripcion} from './validaciones.js';

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
      // llamar a leer datos
      leerDatos();
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
        // si el arreglo listaFunkopopp esta vacio, le cargo los productos
        if(listaFunkopop.length === 0){
            listaFunkopop = _listaFunkopop;
        }
        // dibujar la tabla
        dibujarTabla(_listaFunkopop);
    }
}
function dibujarTabla(_listaFunkopop){
    //traer el padre de la tabla (tbody)
    let tablaFunko = document.getElementById('tablaFunko');
    //variable para trabajar codigo html
    let filaFunko = '';
    // limpiar los datos del tbody
    tablaFunko.innerHTML = '';
    //for(let i=0; i<_listaFunkopop.length i++){}
    for(let i in _listaFunkopop){
        // crear fila
        filaFunko = `<tr>
        <th scope="row">${_listaFunkopop[i].codigo}</th>
        <td>${_listaFunkopop[i].nombre}</td>
        <td>${_listaFunkopop[i].numSerie}</td>
        <td>${_listaFunkopop[i].categoria}</td>
        <td>${_listaFunkopop[i].descripcion}</td>
        <td>${_listaFunkopop[i].imagen}</td>
        <td>
            <button class="btn btn-warning">Editar</button>
            <button class="btn btn-danger" onclick='eliminarFunkopop(this)' id='${_listaFunkopop[i].codigo}'>Borrar</button>
        </td>
      </tr>`;
      // agregar esta fila a su padre
      tablaFunko.innerHTML += filaFunko;
    }
}

window.eliminarFunkopop = function (boton){
    console.log(boton.id)
    Swal.fire({
        title: 'Estas seguro de eliminar el funkopop?',
        text: "No puedes volver atras luego de este paso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar'

      }).then((result) => {
        if (result.isConfirmed) {
            //aqui agregar codigo eliminado
          Swal.fire(
            'Borrado!',
            'Tu funkopop fue eliminado.',
            'success'
          )
        }
      })
}
