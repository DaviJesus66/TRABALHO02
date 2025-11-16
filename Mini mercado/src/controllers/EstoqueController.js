const express = require('express');
const router = express.Router();

const EstoqueModel = require('../models/EstoqueModels');
const { validarId } = require('../validators/IDValidator');
const { validarEstoque, validarEstoqueAtualizacao } = require('../validators/EstoqueValidators');

router.get('/estoque', async (req, res) => {
  try {
    const itens = await EstoqueModel.find().populate('produto');
    res.json(itens);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar itens do estoque.', error });
  }
});

router.get('/estoque/:id', validarId, async (req, res) => {
  try {
    const item = await EstoqueModel.findById(req.params.id).populate('produto');
    if (!item) {
      return res.status(404).json({ message: 'Item do estoque não encontrado!' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar item do estoque.', error });
  }
});

router.post('/estoque', validarEstoque, async (req, res) => {
  try {
    const novoItem = await EstoqueModel.create(req.body);
    res.status(201).json(novoItem);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar item do estoque.', error });
  }
});

router.put('/estoque/:id', validarId, validarEstoqueAtualizacao, async (req, res) => {
  try {
    const atualizado = await EstoqueModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizado) {
      return res.status(404).json({ message: 'Item do estoque não encontrado!' });
    }
    res.json(atualizado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar item do estoque.', error });
  }
});

router.delete('/estoque/:id', validarId, async (req, res) => {
  try {
    const removido = await EstoqueModel.findByIdAndDelete(req.params.id);
    if (!removido) {
      return res.status(404).json({ message: 'Item do estoque não encontrado!' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover item do estoque.', error });
  }
});

module.exports = router;
