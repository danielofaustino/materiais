//Libraries
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MaterialModel = require('../models/Materials')
const ReportsModel = require('../models/Reports')

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

// get materials
app.get('/items', async (req, res) =>{
  MaterialModel.find({}, (err, result) =>{
    if(err){
      res.send(err);
    }
    res.send(result)
  });
})

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

// Put method to Update an item
app.put('/items/:id', async (req, res) =>{

  const _id  = req.params.id
  const item = req.body.item
  const type = req.body.type
  const previousInventory = req.body.previousInventory 
  const currentInventory = req.body.currentInventory
  const defaultInventory = req.body.defaultInventory


  try{
    await MaterialModel.findById(_id, (error,updateMaterial) =>{

      updateMaterial.item = item;
      updateMaterial.type = type;
      updateMaterial.previousInventory = previousInventory;
      updateMaterial.currentInventory = currentInventory;
      updateMaterial.defaultInventory = defaultInventory
      updateMaterial.save();

          

    });
  } catch(err){
    console.log(err)
  }
  
  res.send("Updated item ✔")
  
})

// Delete Method 
app.delete('/items/:id', async(req, res) =>{
  const _id = req.params.id
  await MaterialModel.findByIdAndRemove(_id).exec()
  res.send(" Item Deleted ✔")
  

})



app.listen(PORT, () =>{ console.log('Server Started 🚀')})