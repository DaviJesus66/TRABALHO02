const express = require('express');
const router = express.Router();

const CategoriasModel = require('../models/CategoriasModel');
const { validarId } = require('../validators/IDValidator');
const { validarCategoria, validarCategoriaAtualizacao } = require('../validators/CategoriaValidator');

router.get('/Categorias', async (req, res) => {
  const Categorias = await CategoriaModel.find();
  res.json(Categorias);
});

router.get('/Categorias/:id', validarId, async (req, res) => {
  const Categoria = await CategoriaModel.findById(req.params.id);
  if (!Categoria) {
    return res.status(404).json({ message: 'Categoria não encontrada!' });
  }
  res.json(Categoria);
});

router.post('/Categorias', validarCategoria, async (req, res) => {
  const novaCategoria = await CategoriaModel.create(req.body);
  res.status(201).json(novaCategoria);
});

router.put('/Categorias/:id', validarId, validarCategoriaAtualizacao, async (req, res) => {
  const updatedCategoria = await CategoriaModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedCategoria) {
    return res.status(404).json({ message: 'Categoria não encontrado!' });
  }
  res.json(updatedCategoria);
});

router.delete('/Categorias/:id', validarId, async (req, res) => {
  const deletedCategoria = await CategoriaModel.findByIdAndDelete(req.params.id);
  if (!deletedCategoria) {
    return res.status(404).json({ message: 'Categoria não encontrado!' });
  }
  res.status(204).send();
});

module.exports = router;