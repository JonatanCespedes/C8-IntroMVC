let productos = [
    {
        name: "pantalon",
        price: 35
    },
    {
        name: "remera",
        price: 40
    },
    {
        name: "buzo",
        price: 150
    },

]


module.exports = {
    productos: (req, res) => {
        res.send('Lista de todos los productos')
    },
    producto: (req, res) => {
        let productName = req.params.producto;

        let product = productos.find(item => item.name === productName)

        res.send(`
        Detalle del producto ${product.name}
        Precio: ${product.price}`)
    }
}