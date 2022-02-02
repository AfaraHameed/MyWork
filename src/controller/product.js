
const productService = require('../service/productService')

const editproduct = (req, res) => {

    var updateObject = req.body; // {name : "phone", price: 10000}
    const { body } = req
    let id = req.params.id
    console.log("id:"+id)
    console.log("req body:"+body)
    productService.editProduct(id, updateObject)

}

const addproduct =  (req,res) => {
    
    const{
        name,
        price,
        description
       
    }  =req.body;

  
    productService.addProduct(name,price,description)

}
    module.exports = {
        addProduct: addproduct,
        editProduct :  editproduct
    }
