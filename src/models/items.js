const mongoose  = require('mongoose')
const itemSchema = new mongoose.Schema({
   
     
      name:{type:String},
      price : {type:Number},
      description :{type:String},
      imageUrl: {
        data: Buffer,
        contentType:String

      }
    });
    const ItemSchema = mongoose.model("itemSchema", itemSchema);

    const deliveryDetailsSchema =new mongoose.Schema({
      homeDelivery: {type:Boolean},
      pickup: {type:Boolean}
    })
    const DeliveryDetailsSchema = mongoose.model("deliveryDetailsSchema", deliveryDetailsSchema);

    const paymentDetailsSchema =new mongoose.Schema({
      upi: {type:Boolean},
      cardPayment:{type:Boolean},
      cash:{type:Boolean}
    })
    const PaymentDetailsSchema = mongoose.model("paymentDetailsSchema", paymentDetailsSchema);

     
    const ownerDetailsSchema =new mongoose.Schema({
      name:{type:String},
      email: {type:String},
      address:{type:String},
      Phone:{type:String}
    })
    const OwnerDetailsSchema = mongoose.model("OwnerDetailsSchema", ownerDetailsSchema);

    const sellingOptionsSchema =new mongoose.Schema({
      isAvailableForRent : {type:Boolean},
        isAvailableForPurchase : {type:Boolean},
        priceDetails : {
          price: {type:Number},
          negotiable : {type:Boolean}
        },
        rentDetails : {
          price : {type:Number},
          type : {type:String}
        }
    },{isActive:true})
    const SellingOptionsSchema = mongoose.model("SellingOptionsSchema",sellingOptionsSchema);
    
      
  
module.exports = {
  ItemSchema : ItemSchema,
  DeliveryDetailsSchema : DeliveryDetailsSchema,
  PaymentDetailsSchema  : PaymentDetailsSchema,
  OwnerDetailsSchema : OwnerDetailsSchema,
  SellingOptionsSchema : SellingOptionsSchema


}