const productRrepository =   require('../repository/productRepository')
const Product = require('../models/product')
exports.addProduct =  (req,res) =>{

    const{
        name,
        price,
        description
       
    }  =req.body;
    const _product = new Product({ name,
        price,
        description,
       
})

productRrepository.addProduct(_product)
  
}

exports.editProduct =  (req,res) => {

    let updateObject = req.body; // {name : "phone", price: 10000}
    let id = req.params.id;
    
    productRrepository.editProduct(id,updateObject)

    /*Product.updateOne({_id  : ObjectId(id)}, {$set: updateObject})
    .then(data=>{

        res.send({status:"Success",data:data});
    })
      .catch( e => {
        res.error(req, res, 'Internal Error', 500, e);
      });*/
}


