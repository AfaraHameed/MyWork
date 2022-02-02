const productRepository = require('../repository/productRepository')
let addproduct = function addProduct(name, price, description) {

const _product = {
    name,price,description
}

    productRepository.addProduct(_product)

}

let editproduct = function editProduct(id, updateObject) {

    productRepository.editProduct(id, updateObject)

}
module.exports = {
    addProduct: addproduct,
    editProduct: editproduct
}


