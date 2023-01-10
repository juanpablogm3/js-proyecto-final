const guardarStockLS = (param) =>{
    localStorage.setItem('stock', JSON.stringify(param));
};

const recuperarStockLS = () => {
    stock = JSON.parse(localStorage.getItem('stock'));
    return stock;
};

const renderItems = async () => {
    const contenedor = document.getElementById("itemContainer");

    let productos = await indexController();

    if (localStorage.getItem('stock')){
        productos = recuperarStockLS()
    }

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML = '';
        div.innerHTML += `
            <div class="card product__container" style="width: 14rem;">
                <img src=".${producto.img}" class="card-img-top product__image" alt="${producto.desc}">
                <img src="./public/images/carrito_agregar.png" id="${producto.id}" value="${producto.id}" class="cart-prod agregar" alt="Agregar al acarrito" width=40px>
                <div class="card-content">
                    <h5 class="card-title">${producto.prod}</h5>
                    <p>${producto.desc}</p>
                    <p>Peso: ${producto.peso} Kg</p>
                    <p>$${producto.precio}</p>
                </div>
            </div>
            `
        contenedor.appendChild(div);    
    })
};

const ordenarProductosMayor = async () => {
    const stockMayor = await indexController()
    stockMayor.sort((a, b) => b.precio - a.precio)    
    guardarStockLS(stockMayor);
    renderItems();
    location.reload();
    console.log('ordenado x mayor precio', stockMayor);
};
const ordenMayor  = document.getElementById('xMayorPrecio');
ordenMayor.addEventListener("click", () => {
    ordenarProductosMayor();
});

const ordenarProductosCodigo = async () => {
    const stockCodigo = await indexController()
    stockCodigo.sort((a, b) => a.id - b.id)
    guardarStockLS(stockCodigo);
    renderItems();
    location.reload();
    console.log('ordenado x código', stockCodigo);
};
const ordenCodigo  = document.getElementById('xCodigo');
ordenCodigo.addEventListener("click", () => {
    ordenarProductosCodigo();
});

const ordenarProductosMenor = async () => {
    const stockMenor = await indexController()
    stockMenor.sort((a, b) => a.precio - b.precio)
    guardarStockLS(stockMenor);
    renderItems();
    location.reload();
    console.log('ordenado x menor precio', stockMenor);
};
const ordenMenor  = document.getElementById('xMenorPrecio');
ordenMenor.addEventListener("click", () => {
    ordenarProductosMenor();
});