const mongoose = require('mongoose')

const ReportsSchema = new mongoose.Schema({

  item:{
    type: String,
    required: true,
  },
  type:{
      type: String,
      required: true,
  },
  inputInventory:{
    type:Number,
    required:true,
  },
  outputInventory:{
    type:Number,
    required:true
  },
  date:{
    type:Date,
    required:true
  } 

})


const ReportsModel = mongoose.model('reports',ReportsSchema)

module.exports = ReportsModel