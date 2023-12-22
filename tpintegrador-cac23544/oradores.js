function borrar2() {
    let borrar = confirm('¿Desea borrar el formulario?');
    if (borrar == true) {
document.getElementById("nombre").value = "";
document.getElementById("apellido").value = "";
document.getElementById("correo").value = "";
document.getElementById("cantidad").value = "";
        }
    else if ( borrar ==false) {
            console.log('cancelado')
        }
    }