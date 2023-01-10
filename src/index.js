document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = recuperarCarritoLS();
        actualizarCarrito(carrito);
    }
  /*   if (localStorage.getItem('stock')){
        stock = recuperarStockLS();
    } */
    renderItems();
});
