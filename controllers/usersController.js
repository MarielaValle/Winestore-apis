
var db = require('../database/models/index.js');
const { Sequelize } = require('../database/models/index.js');




let usersController = {


    cantidadUsuarios: (req, res) => {

        db.Usuario.count('id')

            .then(function (resultado) {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: 'localhost:3000/api/users/totalUsers',


                    },
                    data: resultado
                };
                console.log(respuesta)
                res.json(respuesta)


            })
            .catch(error => console.log(error));


    },

    usuarios: (req, res) => {

        db.Usuario.findAll()
            .then(usuarios => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: 'localhost:3000/api/users',
                        cantidad: usuarios.length
                    },
                    data: usuarios
                };
                res.json(respuesta)



            })
            .catch(error => console.log(error));

    },



    perfilUsuario: (req, res) => {

        db.Usuario.findByPk(req.params.id)

            .then(function (usuario) {

                let respuesta = {
                    meta: {
                        status: 200,
                        url: 'localhost:3000/api/users/:id',

                    },
                    data: usuario
                };
                res.json(respuesta)



            })
            .catch(error => console.log(error));


    }



};

module.exports = usersController;    