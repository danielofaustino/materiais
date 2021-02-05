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

mongoose.connect('mongodb+srv://danielofaustino:LinuxBR951@cluster0.izb07.gcp.mongodb.net/debts?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology:true
});


// Port Used
const PORT = 3333


app.get('/items', (req, res) => {
  return res.json({
    message: 'Server Running',
    name: 'Materials Control'
  })
})

app.listen(PORT, () =>{ console.log('Server Started 🚀')})