var express = require('express');
var router = express.Router();



let dashboardController = require('../controllers/dashboardController')
/* GET home page. */

router.get('/api/dashboard', dashboardController.raiz);

router.get('/api/dashboard/cantidadProductos', dashboardController.cantidadProductos);

router.get('/api/dashboard/cantidadUsuarios', dashboardController.cantidadUsuarios);

router.get('/api/dashboard/variedad', dashboardController.variedad);


router.get('/api/dashboard/sumatoriaPrecios', dashboardController.sumatoriaPrecios);




router.get('/api/dashboard/colorTinto', dashboardController.colorTinto);

router.get('/api/dashboard/colorBlanco', dashboardController.colorBlanco);

router.get('/api/dashboard/categoriaPremium', dashboardController.categoriaPremium);

router.get('/api/dashboard/categoriaClasico', dashboardController.categoriaClasico);

router.get('/api/dashboard/precioMaximo', dashboardController.precioMax);

router.get('/api/dashboard/precioMinimo', dashboardController.precioMin);


module.exports = router;