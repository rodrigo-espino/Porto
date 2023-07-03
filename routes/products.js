var express = require('express');
var router = express.Router();
const {ProductsController} = require("../controllers/productsController");


router.get('/', ProductsController.getAllProducts)

router.get('/addproduct', (req, res) => {
    res.render('createproduct')
  })
  
router.post('/addproduct', ProductsController.addProduct);
  
//update
router.get('/addproduct/:id', ProductsController.getProduct);
  
  
router.post('/addproduct/:id', ProductsController.updateProduct);
  
router.delete('/deleteproduct/:id', ProductsController.deleteProduct);

module.exports = router;
