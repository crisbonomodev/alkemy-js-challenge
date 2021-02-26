require('./config/config');

const express = require('express')
const app = express();
const cors = require('cors');

const db = require('./db/db');

db.authenticate()
.then(()=> {console.log('Conexion a la BD exitosa')})
.catch((err)=> {
  console.log(err)
})
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
app.use(require('./routes/index'));

app.listen(process.env.PORT,()=> {
console.log('Escuchando en puerto ' + process.env.PORT);

})