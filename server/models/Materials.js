const mongoose = require('mongoose')

const MaterialsSchema = new mongoose.Schema({

  item:{
    type: String,
    required: true,
  },
  type:{
      type: String,
      required: true,
  }, 
  previousInventory:{
      type:Number,
      required:false,
  }, 
  currentInventory:{
      type:Number,
      required:true,
  },
  defaultInventory:{
    type:Number,
    required:true
  }

})


const MaterialModel = mongoose.model('materials',MaterialsSchema)

module.exports = MaterialModel