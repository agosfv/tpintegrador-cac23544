//function multiplicar() {
   // let precio = Number(200);
    //let cantidad = document.getElementById('cantidad').value;
    //let tot = Number(precio) + Number(cantidad);
   // console.log(tot)
// }

//


function resumenPrecio() {
let precio = Number(200);
let cantidad = document.getElementById('cantidad').value;
let seleccion = document.getElementById('categoria').value;

    if (seleccion === "trainee") {
        let desctr = precio * cantidad * 0.5;
        document.getElementById('resumenPrecio').innerHTML = desctr

    } else if ( seleccion === 'estudiante') {
        let descest = precio * cantidad * 0.2;
        document.getElementById('resumenPrecio').innerHTML = descest
    } else if ( seleccion === 'junior') {
        let descjun = precio * cantidad * 0.8;
        document.getElementById('resumenPrecio').innerHTML = descjun
    } else if ( seleccion === 'elegi') {
        alert('Usted debe elegir una categoria')
    }
}

function borrar() {
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



function cantidad() {
    let cantidad = document.getElementById('cantidad').value;
    if (value === null) {
        alert('Usted debe coompletar el formulario')
    }
}