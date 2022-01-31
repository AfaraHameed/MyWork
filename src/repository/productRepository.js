const Product = require('../models/product')
const Constants = require('../util/constants')
var ObjectId = require('mongodb').ObjectId;
 


/* exports.addProduct =  (req,res) =>{

        const{
            name,
            price,
            description
           
        }  =req.body;
        const _product = new Product({ name,
            price,
            description,
           
    })
    product.save((error,data) =>{
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
        console.log(Constants.hai)   //imported from util/constants.js
        
    }

    exports.editProduct =  (req,res) => {

        let updateObject = req.body; // {name : "phone", price: 10000}
        let id = req.params.id;
        Product.updateOne({_id  : ObjectId(id)}, {$set: updateObject})
        .then(data=>{

            res.send({status:"Success",data:data});
        })
          .catch( e => {
            res.error(req, res, 'Internal Error', 500, e);
          });
    }
*/
 module.exports= {
         addProduct:(product)=>{
             product.save((error,data) =>{
        if(error){
            // return res.status(400).json({
            //     message  : "something happened"
           console.log("error")
            // callback(error)
            // }
           // )
        //}
        if(data){
            // return res.status(201).json({
            //     message: "product data created"
            // })
            console.log("success")
            console.log(Constants.hai)
            // callback(data)
        }
    }
 // console.log(Constants.hai)   //imported from util/constants.js
})
}
 }


 module.exports = {
    editProduct:(id,updateObject)=>{
  

    Product.updateOne({_id  : ObjectId(id)}, {$set: updateObject})
    .then(data=>{

        //res.send({status:"Success",data:data});
        console.log(data)
    })
      .catch( error => {
       // res.error(req, res, 'Internal Error', 500, error);

       console.log(error)
      });
    }
 } 
 

 


    
