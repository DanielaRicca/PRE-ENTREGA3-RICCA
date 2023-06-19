function CargarCarritoLS (){

    return JSON.parse (localStorage.getItem("carrito")) || [];
    
}
function GuardarCarritoLS (carrito){

    localStorage.setItem ("carrito", JSON.stringify (carrito));

}
function AgregarProducto (id){

    let carrito = CargarCarritoLS ();
    let producto = resinas.find (elem => elem.id == id);
    carrito.push (producto);
    GuardarCarritoLS (carrito);
}    

function EliminarProducto (id){

    let carrito = CargarCarritoLS ();
    let posicion = carrito.findIndex (elem => elem.id == id);
    carrito.splice (posicion, 1);
    GuardarCarritoLS (carrito);
    mostrarProductos ();
}