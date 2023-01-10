const indexController = async () => {
    try {
        const response = await fetch('./src/components/data/stock.json')
        const items = await response.json()
        //guardarStockLS(items);
        
        return items

    } catch (error) {
        console.log(error)
    }
};