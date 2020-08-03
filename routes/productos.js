var express = require('express');
var router = express.Router();


let productosController = require('../controllers/productosController')



router.get('/api/productos', (req, res) => {
    console.log("Entre al controller");
    return res.send("Entre al controller");
});

//router.get('/detail/:id',productsController.detail)
router.get('/api/productos/:id', productosController.detail);

router.get('/api/productos/cantidadCategoria', productosController.cantidadCategoria);

module.exports = router;