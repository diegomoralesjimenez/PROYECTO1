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

function recuperarPrecio()
{
   var precioDune = document.getElementByID("dune").value;
   var precioFreeGuy = document.getElementByID("freeGuy").value;
   var precioGknight = document.getElementByID("greenKnigh").value;

   if(document.getElementByID("dune") == "dune")
   { 
	    document.getElementByID("precio").innerHTML = precioDune;
        console.log("sirvio");
        return true;
   }
}

