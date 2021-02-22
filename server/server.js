require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const db = require('./db/db');

db.
db.authenticate()
.then(()=> {console.log('Conexion a la BD exitosa')})
.catch((err)=> {
  console.log(err)
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//GET
app.get('/usuario', function (req, res) {
  res.json('GET usuario')
})
//POST
app.post('/usuario/', function (req, res) {
    let body = req.body;
    if(body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje:'El nombre es necesario'
        })
    }
    res.json({body});
  })
//PUT
  app.put('/usuario', function (req, res) {
    res.json('PUT usuario')
  })
//DELETE
  app.delete('/usuario', function (req, res) {
    res.json('DELETE usuario')
  })
 
app.listen(process.env.PORT,()=> {
console.log('Escuchando en puerto 3000');

})