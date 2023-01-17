const indexController = async () => {
    try {
        const response = await fetch('./src/components/data/stock.json')
        const items = await response.json()
        return items

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Hubo un error',
            text: error,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
};