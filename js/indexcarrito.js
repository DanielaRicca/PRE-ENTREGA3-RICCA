function mostrarProductos (){

    let productos = CargarCarritoLS ();
    let contenido = "";
    if (productos.length > 0){
        contenido = `<table class="table">`;
        productos.forEach(elem => {
        contenido+= `<tr>
        <td> <img src="${elem.imagen}"  width="48" alt="..."> </td>
        <td> ${elem.nombre}</td>
        <td> $${elem.precio}</td>
        <td class="text-end"> <button type="button" class="btn btn-danger" onclick = "EliminarProducto (${elem.id})" class="card-text">Eliminar Carrito</button>
        </td>
        
        </tr>`});
        contenido += `</table>`;

    } else {
        contenido = `<div class="alert alert-danger text-center" role="alert">
        No se encontraron productos!
      </div>`
    }

    let contenedor = document.getElementById ("contenido")
    contenedor.innerHTML = contenido  

}

mostrarProductos ();

