const express = require("express")

const router = express.Router()
const product = require('../models/product')
const { addProduct } =require('../controller/product')
const {editProduct} = require('../controller/product')

router.post('/addProduct',addProduct)
router.patch('/myItem/:id',editProduct );



module.exports = router