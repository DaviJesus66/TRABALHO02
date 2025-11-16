const express = require('express');
const router = express.Router();

const CategoriasModel = require('../models/CategoriasModels');
const { validarId } = require('../validators/IDValidator');
const { validarCategoria, validarCategoriaAtualizacao } = require('../validators/CategoriasValidators');

router.get('/Categorias', async (req, res) => {
  try {
    const categorias = await CategoriasModel.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar categorias.', error });
  }
});

router.get('/Categorias/:id', validarId, async (req, res) => {
  try {
    const categoria = await CategoriasModel.findById(req.params.id);
    if (!categoria) {
      return res.status(404).json({ message: 'Categoria não encontrada!' });
    }
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar categoria.', error });
  }
});

router.post('/Categorias', validarCategoria, async (req, res) => {
  try {
    const novaCategoria = await CategoriasModel.create(req.body);
    res.status(201).json(novaCategoria);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar categoria.', error });
  }
});

router.put('/Categorias/:id', validarId, validarCategoriaAtualizacao, async (req, res) => {
  try {
    const updatedCategoria = await CategoriasModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCategoria) {
      return res.status(404).json({ message: 'Categoria não encontrada!' });
    }
    res.json(updatedCategoria);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar categoria.', error });
  }
});

router.delete('/Categorias/:id', validarId, async (req, res) => {
  try {
    const deletedCategoria = await CategoriasModel.findByIdAndDelete(req.params.id);
    if (!deletedCategoria) {
      return res.status(404).json({ message: 'Categoria não encontrada!' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar categoria.', error });
  }
});

module.exports = router;
