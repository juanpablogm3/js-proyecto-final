document.addEventListener('DOMContentLoaded', () => {
    renderItems();

    if (localStorage.getItem('carrito')) {
        carrito = recuperarCarritoLS();
        console.log(carrito);
        actualizarCarrito(carrito);
    }
});


//const pass = document.getElementById('login');


/* const saludoCliente = () => {
    let eleccion = prompt('Bienvenido\n\nCómo deseas ordenar nuestra lista de productos?\n\n\n1 - Ordenar por código\n\n2 - Ordenar por menor precio\n\n3 - Ordenar por mayor precio\n\n4 - Salir\n\n\nIngresa el número de la opción:\n\n\n');
    switch(eleccion){
        case '1':
            comprarProductos();
            break;
        case '2':
            ordenarProductosMenor();
            comprarProductos();
            break;
        case '3':
            ordenarProductosMayor();
            comprarProductos();
            break;
        case '4':
            let opcion = confirm('Quieres salir del programa?')
            if (opcion){
                cancelarCompra();
            } else {
                saludoCliente();
            }
            break;
        default:
            saludoCliente();
    }
};

const agregarAlCarrito = (existeItem, itemId, itemCantidad) => {
    const itemRepetido = carrito.find(existeItem => existeItem.id === itemId);
    if (itemRepetido) {
        itemRepetido.cantidad += itemCantidad
    } else {
        existeItem.cantidad += itemCantidad
        carrito.push(existeItem)
    }
};

const comprarProductos = () => {
    let itemNombre = '';
    let itemCantidad = 0;
    let seguirComprando = false;

    do{
        const lista = stock.map(stocks => {
            return `${stocks.id} - ${stocks.prod} $${stocks.precio}`;
        });
        let validar
        itemNombre = prompt('Nuestros Productos:'+'\n\n'+lista.join('\n')+'\n\nIngresa el nombre del producto a comprar:\n\n');
        if (itemNombre == null){
            menuCompra();
        }
        const existeItem = stock.find(item => item.prod.toLowerCase() === itemNombre.toLowerCase())
        if (existeItem) {
            itemCantidad = Number(prompt('¿Cuantas unidades quiere comprar?'));
            if (itemCantidad <= 0){
                alert('Por favor ingresa una cantidad, elige tu producto otra vez');
                comprarProductos();
            }
            agregarAlCarrito(existeItem, existeItem.id, itemCantidad)
        } else {
            alert('El producto no se encuentra en la lista')
        }

        seguirComprando = confirm('¿Desea agregar otro producto?')
         

    } while (seguirComprando);
    menuCompra();
};

const menuCompra = () => {
    let eleccion = prompt('Qué deseas hacer?\n\n\n1 - Seguir comprando\n\n2 - Ver el carrito\n\n3 - Finalizar la compra\n\n4 - Salir\n\n\nIngresa el número de la opción:\n\n\n');
    switch(eleccion){
        case '1':
            comprarProductos();
            break;
        case '2':
            verElCarrito();
            break;
        case '3':
            finalizarLaCompra();
            break;
        case '4':
            let opcion = confirm('Quieres salir del programa?')
            if (opcion){
                cancelarCompra();
                break;
            } else{
                menuCompra();
            }
            
        default:
            menuCompra();
    }
};

const verElCarrito = () => {
    const miCarrito = carrito.map(items => {
        return `${items.cantidad} unidades de ${items.prod} a $${items.precio} cada una`;
    });
    let opcion = prompt('Tu Carrito:'+'\n\n'+miCarrito.join('\n')+'\n\nQué deseas hacer?\n\n\n1 - Agregar Productos\n\n2 - Sacar Productos\n\n3 - Finalizar la compra\n\n\n\nIngresa el número de la opción:\n\n\n');
    switch(opcion){
        case '1':
            comprarProductos();
            break;
        case '2':
            sacarDelCarrito();
            break;
        case '3':
            finalizarLaCompra();
            break;
        default:
            menuCompra();
            break;
    }
};

const finalizarLaCompra = ()=> {
    const miCarritoFinal = carrito.map(items => {
        return `${items.cantidad} unidades de ${items.prod} a $${items.precio} cada una`
    });
    const precioTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    const pesoTotal = carrito.reduce((acc, item) => acc + (item.peso * item.cantidad), 0);
    let confirmacion = confirm("Este es tu pedido\n\n"+miCarritoFinal.join('\n')+"\n\n\nPeso total del pedido: "+pesoTotal+" Kg\n\nTotal a abonar: $"+precioTotal+"\n\nDeseas confirmar la compra?");
    if (confirmacion){
        alert("El pedido está terminado, gracias por tu compra!");
        cancelarCompra();
    } else {
        verElCarrito();
    }
};

const sacarDelCarrito = () => {
    const miCarrito = carrito.map(items => {
        return `${items.cantidad} unidades de ${items.prod} a $${items.precio} cada una`;
    });

    let itemNombreASacar ='';
    itemNombreASacar = prompt('Tu Carrito:'+'\n\n'+miCarrito.join('\n')+'\n\nQué producto quierese sacar del carrito?\n\n\nIngresa el nombre del producto\n\n\n');
    carrito.forEach((item, index) => {
        if (item.prod.toLowerCase() === itemNombreASacar.toLowerCase()) {
            if (item.cantidad > 1 && confirm('Usted quiere eliminar 1 unidad del producto '+item.prod+'\n\nEstá seguro?')) {
                item.cantidad--;
                alert('El producto ha sido eliminado del carrito con éxito');
            } else if (confirm('Usted quiere a eliminar del carrito todas las unidades del producto '+item.prod+'\n\nEstá seguro?' )){
                carrito.splice(index, 1);
                alert('El producto ha sido eliminado del carrito con éxito');
            } else {
                verElCarrito();
            }  
        }
    });
    verElCarrito();
};

/* const login = () => {
    let adminPassword = 123456; // esto obviamente estaría en la parte del servidor :)
    let userPassword;
    const { value: password } = await Swal.fire({
        title: 'Enter your password',
        input: 'password',
        inputLabel: 'Password',
        inputPlaceholder: 'Ingrese la contraseña',
        inputAttributes: {
          maxlength: 10,
          autocapitalize: 'off',
          autocorrect: 'off'
        }
      })
      
      if (password===adminPassword) {


        //Swal.fire(`Entered password: ${password}`)
      }
    /* userPassword = Number(prompt('Ingrese la contraseña de administrador: '));
    if (adminPassword===userPassword){
        menuAdmin();
    } else {
        let opcion = '';
        do {
            opcion = prompt('Password incorrecto, desea intentar nuevamente? (si/no):')
            switch (opcion){
                case 'si':
                    login();
                    break;
                case 'no':
                    inicio();
                default:
                    alert('Debes responder con si o no');
                    break;
            }
           
        } while(opcion != 'si' && opcion != 'no')
    } 
};  */

/* 
pass.addEventListener('click', (e) => {
    login();
    e.preventDefault();
    console.log('hola');
    /* e.innerHTML = `
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" style="border-radius: 1rem;">
                            <div class="card-body p-5 text-center">
                                <div class="mb-md-5 mt-md-4 pb-5">
                                    <h2 class="fw-bold mb-2 text-uppercase">Login ADMIN</h2>
                                    <p class="text-white-50 mb-5">Please enter your login and password!</p>
        
                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                                        <label class="form-label" for="typePasswordX">Password</label>
                                    </div>
        
                                    <button class="btn btn-outline-light btn-lg px-5" type="submit">Entrar</button>
        
                                </div>
                                <div>
                                    <p class="mb-0">Entraste por error?<a href="./index.html" class="text-white-50 fw-bold">Salir</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `
        pass.appendChild(e); */  
   

/* const inicio = () => {
    let inicio = confirm('Bienvenido, visitas nuestra página como cliente?\n\nAceptar para entrar\nCancelar para modo ADMIN');
    if (inicio){
        saludoCliente();
    } else {
        login();
    }
};

const agregarAlStock = (nuevoItem) => {
    nuevoItem = {
        id: stock.length+1,
        prod: 'prodNombre',
        desc: 'prodDesc',
        peso: 0,
        precio: 0,
        cantidad: 0
    };
    nuevoItem.prod = prompt('Nombre del producto:');
    nuevoItem.desc = prompt('Descripción del producto:');
    do{
        nuevoItem.peso = Number(prompt('Peso del producto'));
        if(Number.isNaN(nuevoItem.peso) || nuevoItem.peso < 1){
            alert("Ingresa un peso válido")
        }
    } while (Number.isNaN(nuevoItem.peso) || nuevoItem.peso < 1)
    do{
        nuevoItem.precio = Number(prompt('Precio del producto'));
        if(Number.isNaN(nuevoItem.precio) || nuevoItem.precio < 1){
            alert("Ingresa un precio válido")
        }
    } while (Number.isNaN(nuevoItem.precio) || nuevoItem.precio < 1)
    stock.push(nuevoItem);
    alert("El producto se ha creado con éxito");
};

const eliminarDelStock = () => {
    
    const lista = stock.map(stocks => {
        return `${stocks.id} - ${stocks.prod} $${stocks.precio}`;
    });
    let itemNombreAEliminar ='';
    let itemAEliminar;
    itemNombreAEliminar = prompt('Qué producto deseas eliminar?\n\n'+lista.join('\n')+'\n\n\nIngresa el nombre del Producto:\n\n\n');
    if (stock.some(item => item.prod.toLowerCase() === itemNombreAEliminar.toLowerCase())){
        itemAEliminar = stock.find(item => item.prod.toLowerCase() === itemNombreAEliminar.toLowerCase());
        if(confirm('Usted va a eliminar del Stock el producto '+itemAEliminar.prod+'\n\nEstá seguro?' )){
            stock.splice(itemAEliminar.id-1, 1);
            alert('El producto ha sido eliminado del stock con éxito')
            menuAdmin();
        }
        menuAdmin();
    } else {
        alert('Debes ingresar un producto válido');
        eliminarDelStock();
    }
};

const modificarElStock = () => {
    let eleccion = prompt('\nQué deseas modificar?\n\n\n1 - Nombre de un producto\n\n2 - Descripción de un producto\n\n3 - Peso del producto\n\n4 - Precio del producto\n\n5 - Salir\n\n\nIngresa el número de la opción:\n\n\n');
    let itemElegido = 0;
    let lista;
    switch(eleccion){ 
        case '1':
            lista = stock.map(stocks => {
                return `${stocks.id} - ${stocks.prod} $${stocks.precio}`;
            });
            itemElegido = prompt('Qué producto deseas modificar?\n\n'+lista.join('\n')+'\n\n\nIngresa el número del producto:\n\n\n')
            if (itemElegido >= 0 && itemElegido <= stock.length){
                stock[itemElegido-1].prod = prompt('Ingrese el nuevo nombre para el producto');
            } 
            alert("El nombre se ha modificado con éxito");
            break;
        case '2':
            lista = stock.map(stocks => {
                return `${stocks.id} - ${stocks.prod} $${stocks.precio}`;
            });
            itemElegido = prompt('Qué producto deseas modificar?\n\n'+lista.join('\n')+'\n\n\nIngresa el número del producto:\n\n\n')
            if (itemElegido >= 0 && itemElegido <= stock.length){
                stock[itemElegido-1].desc = prompt('Ingrese la nueva descripción para el producto');
            }
            alert("La descripción se ha modificado con éxito");
            break;
        case '3':
            lista = stock.map(stocks => {
                return `${stocks.id} - ${stocks.prod} $${stocks.precio}`;
            });
            do{
                itemElegido = Number(prompt('Qué producto deseas modificar?\n\n'+lista.join('\n')+'\n\n\nIngresa el NÚMERO del producto:\n\n\n'));
            } while(itemElegido == null || itemElegido == 0);
            if (itemElegido >= 0 && itemElegido <= stock.length){
                do{
                    stock[itemElegido-1].peso = Number(prompt('Ingrese el nuevo peso para el producto'));
                    if(stock[itemElegido-1].peso< 1 || Number.isNaN(stock[itemElegido-1].peso)){
                        alert("Debes colocar un peso válido");
                    } else {
                        alert("El peso se ha modificado con éxito");
                    }
                } while (stock[itemElegido-1].peso< 1 || Number.isNaN(stock[itemElegido-1].peso));
            } 
            break;
        case '4':
            lista = stock.map(stocks => {
                return `${stocks.id} - ${stocks.prod} $${stocks.precio}`;
            });
            do{
                itemElegido = Number(prompt('Qué producto deseas modificar?\n\n'+lista.join('\n')+'\n\n\nIngresa el NÚMERO del producto:\n\n\n'));
            } while(itemElegido == null || itemElegido == 0);
            itemElegido = prompt('Qué producto deseas modificar?\n\n'+lista.join('\n')+'\n\n\nIngresa el NÚMERO del producto:\n\n\n')
            if (itemElegido >= 0 && itemElegido <= stock.length){
                do{
                    stock[itemElegido-1].precio = Number(prompt('Ingrese el nuevo precio para el producto'));
                    if(stock[itemElegido-1].precio < 1 || Number.isNaN(stock[itemElegido-1].precio)){
                        alert("Debes colocar un precio válido");
                    } else {
                        alert("El precio se ha modificado con éxito");
                    }
                } while (stock[itemElegido-1].precio < 1 || Number.isNaN(stock[itemElegido-1].precio));
            } 
            break;
        case '5':
            menuAdmin();
        default:
            modificarElStock();
    }
    modificarElStock();
};

const menuAdmin= () => {
    alert('Bienvenido ADMIN, a continuación te damos las opciones para modificar el stock');
    let eleccion = prompt('\nQué deseas modificar?\n\n\n1 - Agregar un producto\n\n2 - Eliminar un producto\n\n3 - Modificar un producto\n\n4 - Salir\n\n\nIngrese el número de la opción:\n\n\n');
    switch(eleccion){
        case '1':
            agregarAlStock();
            break;
        case '2':
            eliminarDelStock();
            break;
        case '3':
            modificarElStock();
            break;
        case '4':
            inicio();
        default:
            menuAdmin();
    }
    menuAdmin();
}; */



        /* const carritoAgregar0 = document.getElementById("0");
        carritoAgregar0.addEventListener("click", () => {
            carrito.push(stock[0]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar1 = document.getElementById("1");
        carritoAgregar1.addEventListener("click", () => {
            carrito.push(stock[1]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar2 = document.getElementById("2");
        carritoAgregar2.addEventListener("click", () => {
            carrito.push(stock[2]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar3 = document.getElementById("3");
        carritoAgregar3.addEventListener("click", () => {
            carrito.push(stock[3]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar4 = document.getElementById("4");
        carritoAgregar4.addEventListener("click", () => {
            carrito.push(stock[4]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar5 = document.getElementById("5");
        carritoAgregar5.addEventListener("click", () => {
            carrito.push(stock[5]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar6 = document.getElementById("6");
        carritoAgregar6.addEventListener("click", () => {
            carrito.push(stock[6]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar7 = document.getElementById("7");
        carritoAgregar7.addEventListener("click", () => {
            carrito.push(stock[7]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar8 = document.getElementById("8");
        carritoAgregar8.addEventListener("click", () => {
            carrito.push(stock[8]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar9 = document.getElementById("9");
        carritoAgregar9.addEventListener("click", () => {
            carrito.push(stock[9]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar10 = document.getElementById("10");
        carritoAgregar10.addEventListener("click", () => {
            carrito.push(stock[10]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar11 = document.getElementById("11");
        carritoAgregar11.addEventListener("click", () => {
            carrito.push(stock[11]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar12 = document.getElementById("12");
        carritoAgregar12.addEventListener("click", () => {
            carrito.push(stock[12]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar13 = document.getElementById("13");
        carritoAgregar13.addEventListener("click", () => {
            carrito.push(stock[13]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar14 = document.getElementById("14");
        carritoAgregar14.addEventListener("click", () => {
            carrito.push(stock[14]);
            guardarCarritoLS();
            recuperarCarritoLS();
        })
        const carritoAgregar15 = document.getElementById("15");
        carritoAgregar15.addEventListener("click", () => {
            carrito.push(stock[15]);
            guardarCarritoLS();
            recuperarCarritoLS();
        }) */
