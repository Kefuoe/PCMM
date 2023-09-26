const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser')
const db = require('./configs/dbconfig')
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200'
}));


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


// app.get('/', (req, res) => {
//   res.status(200).send('hello from here')
// }) //route url
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

//app.get('/mines', db.getUsers)

require("./routes/mines.routes")(app);
require("./routes/production_figures.routes")(app);

app.listen(port, () =>{
    console.log(`running on ${port}`)
});


