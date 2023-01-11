document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = recuperarCarritoLS();
        actualizarCarrito(carrito);
    }
    
    renderItems();
});
