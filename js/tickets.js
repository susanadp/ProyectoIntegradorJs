/* function montoPagar se activa cuando se hace click en boton Resumen*/

function montoPagar () {

    event.preventDefault();    

let cantidad = parseInt(document.getElementById("input-cantidad").value);
let categoria = document.getElementById("select-tickets").value;

const valor = 200;
let valorTotal = 0;


    if (cantidad > 0 && categoria > 0 && categoria <= 4) {

        
        if (categoria == 1) {
            
            valorTotal = valor * 0.2 * cantidad;
   
        }else if (categoria == 2) {
            
            valorTotal = valor * 0.5 * cantidad;
        
           
        }else if (categoria == 3) {
            
            valorTotal = valor * 0.85 * cantidad;
        
        } else if (categoria == 4) {
            
            valorTotal = valor * cantidad;
        }    
    } else {

        /* esta alerta es personalizada de la librería SweetAlert2 */
        swal.fire({
            title: 'Error!',
            text: 'No se ha completado un campo o se ha ingresado un valor inválido',
            icon: "error",
            width: '250px'
        });
    }  
    
    document.getElementById("input-total-pagar").value='Monto total a pagar: $' + valorTotal;
}

/* Método borrar  se activa con el boton Borrar*/

function borrar () {
    form.reset();
}