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
       
    return true;
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

validarTarjeta(campo)
{
    var regex = /^([0-9])-.{7}$/;
    
     if(!campo.value.match(regex))
    {
        document.getElementById("errorTarjeta").style.color="red";
        var mensaje = "Solo se aceptan 6 digitos separados en dos por un guion XX-XX-XX";
        document.getElementById("errorTarjeta").innerHTML = mensaje;
        return false;
    }
    
    return true;
}


function habilitar1()
{
    if(document.getElementById("comprar").disabled==false)
    {
        document.getElementById("rentar").disabled=true;              
    }
}

function habilitar2()
{
    if(document.getElementById("rentar").disabled==false)
        {
            document.getElementById("comprar").disabled=true;
        }
}


