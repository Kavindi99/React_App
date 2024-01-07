var express = require('express');
var router = express.Router();
//like an object
//const {productsList} = require('../constants/const');

//like an array
const [productsList, test] = require('../constants/const');

let ProductsController = require('../controller/ProductsController');
const {get} = require("mongoose");


/* GET users listing. */
// http://localhost:4000/products/all
//http://localhost:4000/products/save
// router.get('/all', function(req, res, next) {
//   res.send(productsList);
// });

//after created ProductController
//http://localhost:4000/products/all
router.get('/all',ProductsController.getAllProducts);

//adla products wala save karanna
//http://localhost:4000/products/save
router.post('/save', ProductsController.saveProducts);

//thani product ekakta datA Retrive karana widiya
//'/find/:id --> find 1
//http://localhost:4000/products/find/1  ganna
router.get('/find/:id' ,ProductsController.getProduct);

//update Product
//http://localhost:4000/products/update/1
router.put('/update/:id', ProductsController.updateProduct);

//http://localhost:4000/products/delete/1
router.delete('/delete/:id' , ProductsController.deleteProduct);



module.exports = router;
