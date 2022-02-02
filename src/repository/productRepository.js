const Product = require('../models/product')
const Constants = require('../util/constants')
var ObjectId = require('mongodb').ObjectId;

let addproduct = function addProduct(product){
    product.save((error, data) => {
        if (error) {

            console.log("error")

            if (data) {

                console.log("success")
                console.log(Constants.hai)

            }
        }

    })
}

let editproduct = function editProduct(id , updateObject){
    
    Product.updateOne({ _id: ObjectId(id) }, { $set: updateObject })
    .then(data => {

        console.log(data)
        console.log("success")
    })
    .catch(error => {
    
        console.log(error)
        console.log("error")
    });
}

module.exports = {
    addProduct : addproduct,
    editProduct : editproduct
}





