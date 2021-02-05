const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());


app.get('/', (req, res) => {
  return res.json({
    message: 'Server Running',
    name: 'Materials Control'
  })
})

app.listen(3333, () =>{ console.log('Server Started 🚀')})