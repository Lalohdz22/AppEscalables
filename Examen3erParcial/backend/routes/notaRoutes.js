const express = require('express');
const { obtenerNotas, crearNota } = require('../controllers/notaController');
const router = express.Router();
router.get('/', obtenerNotas);
router.post('/', crearNota);
module.exports = router;