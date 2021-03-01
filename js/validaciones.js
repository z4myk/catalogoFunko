function validarCodigo(codigo){
    if(codigo.value.trim() != '' && !isNaN (codigo.value)){
        codigo.className = 'form-control is-valid'
        return true;
    } else {
        codigo.className = 'form-control is-invalid'
        return false;
    }
}
function validarText(texto) {
    if (texto.value.trim() != "" && texto.value.length >= 10) {
        texto.className = "form-control is-valid";
        return true;
    } else {
        texto.className = "form-control is-invalid";
        return false;
    }
}