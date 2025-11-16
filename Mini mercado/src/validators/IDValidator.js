const mongoose = require('mongoose');

async function validarId(req, res, next) {
  try {
    const { id } = req.params;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ erro: 'ID do recurso é inválido.' });
    }
    next();
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao validar o ID.' });
  }
}

module.exports = { validarId };
