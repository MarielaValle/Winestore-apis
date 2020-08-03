var db = require('../database/models/index.js');
const { Sequelize } = require('../database/models/index.js');

let productosController = {

    

    raiz: (req, res) => {
        console.log('Entre al controller')
        return res.send('Estoy');
        db.Producto.findAll()
          
        .then(function (productos) {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: 'localhost:3000/api/productos',
                        cantidad: productos.length
                    },
                    data: productos
                };
                res.json(respuesta)



            })
            .catch(error => console.log(error));
    },



    detail: (req, res) => {

        db.Producto.findByPk(req.params.id)

            .then(function (producto) {

                let respuesta = {
                    meta: {
                        status: 200,
                        url: 'localhost:3000/api/productos/:id',

                    },
                    data: producto
                };
                res.json(respuesta)



            })
            .catch(error => console.log(error));
    },

    cantidadCategoria: (req, res) => {

        db.sequelize.query('SELECT color, categoria, variedad FROM productos')

            .then(function (productos) {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: 'localhost:3000/api/productos/cantidadCategoria',

                    },
                    data: {
                        color: productos.color.lenght,
                        categoria: productos.categoria.length,
                        variedad: productos.categoria.length
                    }
                };
                res.json(respuesta)


            })

            .catch(error => console.log(error));
    }

}

module.exports = productosController;    
