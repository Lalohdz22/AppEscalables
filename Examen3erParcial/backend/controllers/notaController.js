const Nota = require('../models/Nota');

const obtenerNotas = async (req, res) => {
  try {
    const notas = await Nota.find();
    res.json(notas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error para obtener las notas', error: error.message });
  }
};

const crearNota = async (req, res) => {
  try {
    const { titulo, contenido } = req.body;
    const nota = await Nota.create({ titulo, contenido });
    res.status(201).json(nota);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear la nota', error: error.message });
  }
};
module.exports = { obtenerNotas, crearNota };