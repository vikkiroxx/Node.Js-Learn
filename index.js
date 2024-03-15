const mongoose = require('mongoose');
const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/Node-Learn");
    const ProductSchema = new mongoose.Schema({
        name:String,
        Brand:String,
        DeviceWorth:Number
    });
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = new ProductsModel({
        name:"Manohar", 
        Brand: "Oppo", 
        DeviceWorth: 1500
    });
    let result = await data.save();
    console.log(result)
}

main()


// const dbConnect = require('./mongodb.js')

// const main = async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }

// main();




// const {MongoClient} = require('mongodb');
// const url =  'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'Node-Learn';

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();

// const express = require('express');
// const reqFilter= require('./middleware');
// const app = express();
// const route= express.Router();


// // app.use(reqFilter);
// route.use(reqFilter)
// app.get('/', (res, resp) => {
//     resp.send('Welcome to Home page')
// });

// app.get('/users', (res, resp) => {
//     resp.send('Welcome to Users page')
// });

// route.get('/about', (res, resp) => {
//     resp.send('Welcome to About page')
// });
// route.get('/contact', (res, resp) => {
//     resp.send('Welcome to contact page')
// });

// app.use('/',route);

// app.listen(5000)

