//Libraries
const express = require("express");
const cors = require("cors");

const app = express();

// Able Json
app.use(express.json());
app.use(cors());


// Port Used
const PORT = 3333


app.get('/', (req, res) => {
  return res.json({
    message: 'Server Running',
    name: 'Materials Control'
  })
})

app.listen(PORT, () =>{ console.log('Server Started 🚀')})