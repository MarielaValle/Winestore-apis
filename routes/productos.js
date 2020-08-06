var express = require('express');
var router = express.Router();



var productosController = require('../controllers/productosController')
/* GET home page. */



router.get('/', productosController.raiz);

router.get('/:id', productosController.detail);

router.get('/cantidadProductos', productosController.cantidadProductos);


router.get('/variedad', productosController.variedad);


router.get('/sumatoriaPrecios', productosController.sumatoriaPrecios);


router.get('/colorTinto', productosController.colorTinto);

router.get('/colorBlanco', productosController.colorBlanco);

router.get('/categoriaPremium', productosController.categoriaPremium);

router.get('/categoriaClasico', productosController.categoriaClasico);

router.get('/precioMaximo', productosController.precioMax);

router.get('/precioMinimo', productosController.precioMin);


module.exports = router;