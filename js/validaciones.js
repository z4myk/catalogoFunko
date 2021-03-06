let inputNum = document.getElementById('codigo');
inputNum.addEventListener('blur', validarCodigo);
let inputNombre = document.getElementById('nombre');
inputNombre.addEventListener('blur', validarText);
let numSerie = document.getElementById('numSerie');
numSerie.addEventListener('blur', validarSerie);
let numCategoria = document.getElementById('categoria');
numCategoria.addEventListener('blur', validarCategoria);
let inputDesc = document.getElementById('descripcion');
inputDesc.addEventListener('blur', validarDescripcion)

export function validarCodigo (event){
    if(inputNum.value.trim() != '' && !isNaN (inputNum.value) && inputNum.value.length >= 3){
        inputNum.className = 'form-control is-valid'
        return true;
    } else {
        inputNum.className = 'form-control is-invalid'
        return false;
    }
}
export function validarText (event){
    if (inputNombre.value.trim() != "" && inputNombre.value.length >= 4) {
        inputNombre.className = "form-control is-valid";
        return true;
    } else {
        inputNombre.className = "form-control is-invalid";
        return false;
    }
}
export function validarSerie (event){
    if (numSerie.value.trim() != "" && numSerie.value.length >= 4) {
        numSerie.className = "form-control is-valid";
        return true;
    } else {
        numSerie.className = "form-control is-invalid";
        return false;
    }
}

export function validarCategoria (event){
    if (numCategoria.value.trim() != "" && numCategoria.value.length >= 4){
        numCategoria.className = "form-control is-valid";
        return true;
    }else{
        numCategoria.className = "form-control is-invalid";
        return false;
    }
}

export function validarDescripcion (event){
    if (inputDesc.value.trim() != '' && inputDesc.value.length >= 10){
        inputDesc.className = "form-control is-valid";
        return true;
    }else{
        inputDesc.className = "form-control is-invalid";
        return false;
    }
}