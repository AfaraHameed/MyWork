const Product = require('../models/product')
var ObjectId = require('mongodb').ObjectId;

const productService = require('../service/productService')
module.exports = {
     addProduct  : productService.addProduct,
     editProduct :productService.editProduct
     }

/*exports.addProduct =  (req,res) =>{

        const{
            name,
            price,
            description
           

        }  =req.body;
        const _product = new Product({ name,
            price,
            description,
           
    })

        _product.save((error,data) =>{
            if(error){
                return res.status(400).json({
                    message  : "something happened"
                })
            }
            if(data){
                return res.status(201).json({
                    message: "product data created"
                })
            }
        })
        
    }

    exports.editProduct =  (req,res) => {

        var updateObject = req.body; // {name : "phone", price: 10000}
        var id = req.params.id;
        Product.updateOne({_id  : ObjectId(id)}, {$set: updateObject})
        .then(data=>{

            res.send({status:"Success",data:data});
        })
          .catch( e => {
            res.error(req, res, 'Internal Error', 500, e);
          });
    }

    */
