const mongoose = require('mongoose');
const notaSchema = new mongoose.Schema({
  titulo:    { type: String, required: [true, 'El título es obligatorio'] },
  contenido: { type: String, required: [true, 'El contenido es obligatorio'] }
});
module.exports = mongoose.model('Nota', notaSchema);