const finalizarCompra = document.getElementById('finalizarCompra');

finalizarCompra.addEventListener('click', () => {
    carrito!='' ? pintarCheckout() : carritoVacio();
});

const pintarCheckout = () => {
    cerrarCarrito.click();

    const contenedor = document.getElementById("itemContainer");
    
    contenedor.innerHTML = '';
   
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="d-flex justify-content-center checkout">
            <div class="col-md-7 col-lg-8">
                <h4 class="mb-3">Dirección de Facturación</h4>
                <form name="finform" id="finalizarPago" onSubmit="finalizar(); return false;" class="needs-validation finalizarPago" novalidate="">
                    <div class="row g-3">
                        <div class="col-sm-6">
                            <label for="Nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" value="" required="true">
                            <div class="invalid-feedback">
                                Ingrese un nombre válido.
                            </div>
                        </div>
    
                        <div class="col-sm-6">
                            <label for="lastName" class="form-label">Apellido</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                            <div class="invalid-feedback">
                                Ingrese un apellido válido.
                            </div>
                        </div>
    
                        <div class="col-12">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="usuario@dominio.com" required="">
                            <div class="invalid-feedback">
                                Por favor ingrese un email válido.
                            </div>
                        </div>
    
                        <div class="col-12">
                            <label for="address" class="form-label">Dirección de envío</label>
                            <input type="text" class="form-control" id="address" placeholder="Calle Falsa 123" required="">
                            <div class="invalid-feedback">
                                Ingrese la dirección para el envío.
                            </div>
                        </div>

                        <div class="col-6">
                            <label for="address" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="phone" placeholder="Cód area + número" required="">
                            <div class="invalid-feedback">
                                Ingrese un teléfono válido.
                            </div>
                        </div>

                        <div class="col-6">
                            <label for="address" class="form-label">Móvil</label>
                            <input type="text" class="form-control" id="mobile" placeholder="Cód area + número (sin 0 ni 15)" required="">
                            <div class="invalid-feedback">
                                Ingrese un teléfono válido.
                            </div>
                        </div>
    
                        <div class="col-12">
                            <label for="address2" class="form-label">Dirección de facturación<span class="text-muted">(Opcional)</span></label>
                            <input type="text" class="form-control" id="address2" placeholder="Calle Falsa 123">
                        </div>
    
                        <div class="col-md-4">
                            <label for="country" class="form-label">País</label>
                            <select class="form-select" id="country" required="">
                                <option value="">Elegir...</option>
                                <option>Argentina</option>
                            </select>
                            <div class="invalid-feedback">
                                Seleccione un país.
                            </div>
                        </div>
    
                        <div class="col-md-4">
                            <label for="state" class="form-label">Provincia</label>
                            <select class="form-select" id="state" required="">
                                <option value="">Elegir...</option>
                                <option>CABA</option>
                                <option>Buenos Aires</option>
                                <option>Santa Fe</option>
                                <option>Mendoza</option>
                            </select>
                            <div class="invalid-feedback">
                                Por favor ingrese una provincia válida.
                            </div>
                        </div>
                    </div>
    
                    <hr class="my-4">
    
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="same-address">
                        <label class="form-check-label" for="same-address">La dirección de envío es la dirección de facturación</label>
                    </div>
    
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="save-info">
                        <label class="form-check-label" for="save-info">Guardar datos para el próximo pedido</label>
                    </div>
    
                    <hr class="my-4">
    
                    <h4 class="mb-3">Pago</h4>
    
                    <div class="my-3">
                        <div class="form-check">
                            <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="">
                            <label class="form-check-label" for="credit">Tarjeta de crédito</label>
                        </div>
                        <div class="form-check">
                            <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="">
                            <label class="form-check-label" for="debit">Tarjeta de débito</label>
                        </div>
                        <div class="form-check">
                            <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="">
                            <label class="form-check-label" for="paypal">Mercado Pago con link de pago</label>
                        </div>
                    </div>
    
                    <div class="row gy-3">
                        <div class="col-md-6">
                            <label for="cc-name" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                            <small class="text-muted">Nombre como figura en la tarjeta</small>
                            <div class="invalid-feedback">
                                Nombre es obligatorio
                            </div>
                        </div>
    
                        <div class="col-md-6">
                            <label for="cc-number" class="form-label">Número</label>
                            <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                            <div class="invalid-feedback">
                                Número es obligatorio
                            </div>
                        </div>
    
                        <div class="col-md-3">
                            <label for="cc-expiration" class="form-label">Vencimiento</label>
                            <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                            <div class="invalid-feedback">
                                Vencimiento es obligatorio
                            </div>
                        </div>
    
                        <div class="col-md-3">
                            <label for="cc-cvv" class="form-label">Código de seguridad</label>
                            <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                            <div class="invalid-feedback">
                                Código de seguridad es obligatorio
                            </div>
                        </div>
                    </div>
    
                    <hr class="my-4">
    
                    <input id="finPago" type="submit" class="w-100 btn btn-primary btn-lg finPago" value="Confirmar pago">
                </form>
            </div>
        </div>
            
        `
        contenedor.appendChild(div);    
};

const carritoVacio = () => {
    Swal.fire({
        icon: 'warning',
        title: 'Tu carrito está vacío',
        text: 'Serás redirigid@ a la lista de productos',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
    })
    .then((result) => {
        result.isConfirmed && location.reload();
    })
}

const finalizar = () => {
    Swal.fire({
        icon: 'success',
        title: 'Gracias por tu compra!',
        text: 'Nos contactaremos para confirmar el envío',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },

        didOpen: () => {
            carrito = [];
            guardarCarritoLS();
            console.log(recuperarCarritoLS());
        },
        willClose: () => {
            location.reload();
        }
    })
};