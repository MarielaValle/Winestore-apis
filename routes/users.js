var express = require("express");
var router = express.Router();

let usersController = require("../controllers/usersController")



router.get('/api/totalUsers', usersController.cantidadUsuarios);

router.get('/api/users', usersController.usuarios);

router.get('/api/users/:id', usersController.perfilUsuario);


module.exports = router;
