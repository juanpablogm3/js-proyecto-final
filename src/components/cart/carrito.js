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
        productoRepetido.cantidad++
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `Cantidad: ${productoRepetido.cantidad}`
        actualizarTotCarrito(carrito);
    }
};

const pintarEnCarrito = (producto) => {
    const contenedor = document.getElementById('carrito-contenedor');
    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
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
};

const eliminarDelCarrito = (productoId) => {
    const productoIndex = carrito.findIndex(producto => producto.id == productoId);
    carrito.splice(productoIndex, 1);
    actualizarCarrito(carrito);
    actualizarTotCarrito(carrito);
};

const actualizarCarrito = (carrito) => {
    const contenedor = document.getElementById('productoEnCarrito-contenedor');

    contenedor.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML += `
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
    const totalCompra = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    pintarTotCarrito(totalCantidad, totalCompra);
    guardarCarritoStorage(carrito);
};

const pintarTotCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById('contador-carrito');
    const precioTotal = document.getElementById('precioTotal');
    console.log(contadorCarrito, precioTotal)

    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText = totalCompra;
};