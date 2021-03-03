validarCodigo= codigo => {
    if(codigo.value.trim() != '' && !isNaN (codigo.value) && codigo.value.length >= 3){
        codigo.className = 'form-control is-valid'
        return true;
    } else {
        codigo.className = 'form-control is-invalid'
        return false;
    }
}
validarText = texto => {
    if (texto.value.trim() != "" && texto.value.length >= 4) {
        texto.className = "form-control is-valid";
        return true;
    } else {
        texto.className = "form-control is-invalid";
        return false;
    }
}

