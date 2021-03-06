const express = require('express');
const env = require('dotenv');
const app = express();

const mongoose = require('mongoose');

//routes

//const itemRoutes = require('./routes/items')
const productRoutes = require('./routes/product')


env.config();

//mongodb connection
//mongodb+srv://afara:<password>@cluster0.uhaxe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.uhaxe.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
     
    

}
).then(()=>{
    console.log('database connected')
});
app.use(express.json())



app.use('/api',productRoutes)


app.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'hello from server'
    });
});
app.post('/data',(req,res,next)=>{
    res.status(200).json({
        message:req.body
    });
});



app.listen(process.env.PORT,()=>{
    console.log(env.config())
    console.log(`Server is running on port ${process.env.PORT}`);
});