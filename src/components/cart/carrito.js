let carrito = [];

const contenedor = document.getElementById('itemContainer');

contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('agregar')) {
            validarRepetido(e.target.id)
    }
});

const validarRepetido = (productoId) => {
    const productoRepetido = carrito.find(producto => producto.id == productoId);

    if (!productoRepetido) {
        const producto = stock.find(producto => producto.id == productoId);
        carrito.push(producto);
        pintarEnCarrito(producto);
        guardarCarritoLS(carrito);
        actualizarTotCarrito(carrito);
    } else {
        productoRepetido.cantidad++;
       /*  const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `Cantidad: ${productoRepetido.cantidad}` */
        guardarCarritoLS(carrito);
        actualizarCarrito(carrito); // cambio Tot x común
    }
};

const pintarEnCarrito = (producto) => {
    const contenedor = document.getElementById('carrito-contenedor');
    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = ''
    div.innerHTML = `
        <div class="card mb-3 mb-lg-0">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div>
                            <img src=${producto.img} class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                        </div>
                        <div class="ms-3">
                            <h5>${producto.prod}</h5>
                            <p class="small mb-0">${producto.desc}</p>
                            <p class="small mb-0">Peso: ${producto.peso} Kg</p>
                        </div>
                    </div>
                    <div class="d-flex flex-row align-items-center">
                        <div style="width: 50px;">
                            <h5 class="fw-normal mb-0">${producto.cantidad}</h5>
                        </div>
                        <div style="width: 80px;">
                            <h5 class="mb-0">$${producto.precio}</h5>
                        </div>
                        <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
                        <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
                    </div>
                </div>
            </div>
        </div>
        `
    contenedor.appendChild(div);
    location.reload();
};

const eliminarDelCarrito = (productoId) => {
    const productoIndex = carrito.findIndex(producto => producto.id == productoId);
    carrito.splice(productoIndex, 1);
    actualizarCarrito(carrito);
};

const actualizarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');
    contenedor.innerHTML = '';
    actualizarTotCarrito(carrito);
    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML += `
            <div class="card mb-3 mb-lg-0">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                            <div>
                                <img src=".${producto.img}" class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                            </div>
                            <div class="ms-3">
                                <h5>${producto.prod}</h5>
                                <p class="small mb-0">${producto.desc}</p>
                                <p class="small mb-0">Peso: ${producto.peso} Kg</p>
                            </div>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                            <div style="width: 50px;">
                                <h5 class="fw-normal mb-0">${producto.cantidad}</h5>
                            </div>
                            <div style="width: 80px;">
                                <h5 class="mb-0">$${producto.precio}</h5>
                            </div>
                            <button class="btn btn-outline-danger boton-eliminar" type="button" value="${producto.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                          </svg> Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
            `
        contenedor.appendChild(div);
    });
};

const guardarCarritoLS = (carrito) =>{
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

const recuperarCarritoLS = () => {
    const currentCarrito = JSON.parse(localStorage.getItem('carrito'));
    return currentCarrito;
};

const actualizarTotCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const totalPeso = carrito.reduce((acc, item) => acc + (item.peso * item.cantidad), 0);
    const totalCompra = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    pintarTotCarrito(totalCantidad, totalPeso, totalCompra);
    guardarCarritoLS(carrito);
};

const pintarTotCarrito = (totalCantidad, totalPeso, totalCompra) => {
    const contadorCarrito = document.getElementById('contador-carrito');
    const pesoTotal = document.getElementById('pesoTotal');
    const precioTotal = document.getElementById('precioTotal');

    contadorCarrito.innerText = totalCantidad;
    pesoTotal.innerText = "Peso total del pedido: "+totalPeso+" Kg";
    precioTotal.innerText = "El total de la compra es $ "+totalCompra;
};