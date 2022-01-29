// const router = express.Router();
// const express = require("express")


// const {ItemSchema} = require('../models/items');
// const {DeliveryDetailsSchema} = require('../models/items');
// const {PaymentDetailsSchema } = require('../models/items');
// const {OwnerDetailsSchema} = require('../models/items');
// const {SellingOptionsSchema} = require('../models/items');

// const config = require('../config/database');


// router.post("/requestItem", function (req, res) {
//     const newItem = new itemSchema({
//         name:req.body.name,
//         price : req.body.price,
//         description :req.body.description,
//        // image :req.body.imageUrl
//     });
//     const deliveryDetails = new deliveryDetailsSchema({
        
//         homeDelivery: req.body.homeDelivery,
//         pickup: req.body.pickup
//     });
//     const paymentDetails = new paymentDetailsSchema({
//         upi: req.body.upi,
//         cardPayment:req.body.cardPayment,
//         cash:req.body.cash
//     });
//     const OwnerDetails = new OwnerDetailsSchema({
//         name:req.body.name,
//       email: req.body.email,
//       address:req.body.address,
//       Phone:req.body.phone
//     });
//     const SellingOptions = new SellingOptionsSchema({
//         isAvailableForRent : req.body.isAvailableForRent,
//         isAvailableForPurchase : req.body.isAvailableForPurchase,
//         priceDetails : {
//           price: req.body.price,
//           negotiable : req.body.negotiable
//         },
//         rentDetails : {
//           price : req.body.price,
//           type : req.body.type
//         }
//     });


//     // console.log(newRequest);
//     newItem
//         .save()
//         .then(result => {
//             console.log(result)
//             res.json({ state: true, msg: "Data inserted Successfully..!" });
//         })
//         .catch(error => {
//             console.log(error)
//             res.json({ state: false, msg: "Data inserting Unsuccessfull..!" });
//         });

//         deliveryDetails
//         .save()
//         .then(result => {
//             console.log(result)
//             res.json({ state: true, msg: "Data inserted Successfully..!" });
//         })
//         .catch(error => {
//             console.log(error)
//             res.json({ state: false, msg: "Data inserting Unsuccessfull..!" });
//         });

//         paymentDetails
//         .save()
//         .then(result => {
//             console.log(result)
//             res.json({ state: true, msg: "Data inserted Successfully..!" });
//         })
//         .catch(error => {
//             console.log(error)
//             res.json({ state: false, msg: "Data inserting Unsuccessfull..!" });
//         });

//         OwnerDetails
//         .save()
//         .then(result => {
//             console.log(result)
//             res.json({ state: true, msg: "Data inserted Successfully..!" });
//         })
//         .catch(error => {
//             console.log(error)
//             res.json({ state: false, msg: "Data inserting Unsuccessfull..!" });
//         });

//         SellingOptions
//         .save()
//         .then(result => {
//             console.log(result)
//             res.json({ state: true, msg: "Data inserted Successfully..!" });
//         })
//         .catch(error => {
//             console.log(error)
//             res.json({ state: false, msg: "Data inserting Unsuccessfull..!" });
//         });
// });

// module.exports = router