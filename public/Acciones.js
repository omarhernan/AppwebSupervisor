
 var usuario = document.forms['form']['usuario'];
 var contrasena = document.forms['form']['contrasena'];
 var nombre = document.forms['form']['nombre'];

 var usu_error = document.getElementById('error_usu');
 var contra_error = document.getElementById('error_contra');
 var nom_error = document.getElementById('error_nom');

 usuario.addEventListener('textInput', usu_very);
 contrasena.addEventListener('textInput', contra_very);
 nombre.addEventListener('textInput', nom_very);

    function validar(){   
        if( usuario.value.length < 1){
            usuario.style.border = "1px solid red";
            usu_error.style.display = "block";
            usuario.placeholder= '';
            return false;
        } 
        if( contrasena.value.length < 1){
                contrasena.style.border = "1px solid red";
                contra_error.style.display = "block";
                contrasena.placeholder= '';
                return false;
            }          
}

function usu_very(){

    if( usuario.value.length > 1){
        usuario.style.border = "1px solid silver";
        usu_error.style.display = "none";
        return true;
    } 
}

function contra_very(){
    if( contrasena.value.length > 1){
        contrasena.style.border = "1px solid silver";
        contra_error.style.display = "none";
        return true;
    } 
}

function vdatos(){   
    if( nombre.value.length < 1){
        nombre.style.border = "1px solid red";
        nom_error.style.display = "block";
        nombre.placeholder= '';
        return false;
    } 
        
}