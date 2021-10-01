function validarTodo()
{
    if(!validarTelefono(document.getElementById("phoneS")))
    {
        return false;
    }
    if(!validarCorreo(document.getElementById("emaaail")))
    {
        return false;
    }
    if(!validarTarjeta(document.getElementById("tarjetaS")))
    {
        return false;
    }
}

function validarTelefono(campo)
{
    var regex = /^[0-9].{7}$/;
    if(!campo.value.match(regex))
    {
       document.getElementById("errorPhone").style.color="red";
       var mensaje = "El numero telefonico debe tener 8 digitos";
       document.getElementById("errorPhone").innerHTML = mensaje;
        return false;
    }
    return true;
}

function validarCorreo(campo)
{
    var regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    
    if(!campo.value.match(regex))
    {
        document.getElementById("errorCorreo").style.color="red";
        var mensaje = "El formato del correo es incorrecto";
        document.getElementById("errorCorreo").innerHTML = mensaje;
        return false;
    }   
    return true;

}


