const ProductsORM = require('../models/productsORM');
const { check, validationResult } = require("express-validator")

const validationRules = [                                                                        
    check('username').notEmpty().trim().withMessage('username is required'),
    check('password').notEmpty().trim()
]


class ProductsController {
    static async getAllProducts(req, res) {
        let results = await ProductsORM.findAll();

        if (results) {
            res.render("products", {products: results});
        }
    }

    static async addProduct(req, res){
        console.log(req.body)
        let result = await ProductsORM.create({Nombre: req.body.name, Image: req.body.image })

        if(result){
            res.redirect("/products")
        }
        else{
            res.send("ERROR: the product added failed")
        }
    }

    static async updateProduct(req, res){
        let uid = req.params.id; 

        let result = await ProductsORM.update({ Nombre: req.body.name, Image: req.body.image }, {
            where: {
                id: uid
            }
        })

        if (result){
            res.redirect("/products")
        }
        else{
            res.send("Update user failed")
        }
    }

    static async getProduct(req, res) {

        let id = req.params.id;

        let results = await ProductsORM.findByPk(id);
        
        if (results) {
            res.render("createProduct", { product: results });
        }
    }
    
    static async deleteProduct(req, res){
        let uid = req.params.id;
        let result = await ProductsORM.destroy({
            where: {
                id: uid
            }
        })

        if (result){
            res.status(200).send("OK");
        }
    }

}

module.exports = {
    validationRules,
    ProductsController
}