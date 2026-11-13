const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const notaRoutes = require('./routes/notaRoutes');

const app = express();

app.use(cors());          
app.use(express.json());  

app.use('/api/notas', notaRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/notas_rapidas')
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
  })
  .catch(err => console.error('Error de conexión:', err));
