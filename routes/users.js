var express = require("express");
var router = express.Router();

var usersController = require("../controllers/usersController")

router.get('/',usersController.raiz)

router.get('/usersTodos', usersController.usuarios);

router.get('/totalUsers', usersController.cantidadUsuarios);


router.get('/:id', usersController.perfilUsuario);


module.exports = router;
