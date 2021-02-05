//Libraries
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MaterialModel = require('../models/Materials')

const app = express();

// Able Json
app.use(express.json());
app.use(cors());

//Database Connection

mongoose.connect('mongodb+srv://danielofaustino:LinuxBR951@cluster0.izb07.gcp.mongodb.net/materials?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology:true
});


// Port Used
const PORT = 3333




//Middlewares
//logRequest is a middleware that show us the method called in each action
function logRequests(req, res, next) {
  const { method, url } = req;

  const logLabel = `[${method.toUpperCase()} ${url}]`;

  console.log(logLabel);
  console.time(logLabel);
  next();
  console.timeEnd(logLabel);
}

app.use(logRequests);



// Registering a new item
app.post('/items', async (req, res) => {

  const item = req.body.item;
  const type = req.body.type;
  const previousInventory = req.body.previousInventory
  const currentInventory = req.body.currentInventory
  const defaultInventory = req.body.defaultInventory

  const newItem = new MaterialModel({ 
    item: item,
    type: type,
    previousInventory: previousInventory,
    currentInventory: currentInventory,
    defaultInventory: defaultInventory
  });

  try{
  await newItem.save();
  res.send(' Registered item ✔')
  } catch (error){
    console.log(error)
  }


})

app.listen(PORT, () =>{ console.log('Server Started 🚀')})