const express = require('express');
const router = express.Router();

const EstoqueModel = require('../models/EstoqueModels');
const { validarId } = require('../validators/IDValidator');
const { validarEstoque, validarEstoqueAtualizacao } = require('../validators/EstoqueValidators');

router.get('/estoque', async (req, res) => {
  const itens = await EstoqueModel.find().populate('produto');
  res.json(itens);
});

router.get('/estoque/:id', validarId, async (req, res) => {
  const item = await EstoqueModel.findById(req.params.id).populate('produto');
  if (!item) return res.status(404).json({ message: 'Item do estoque não encontrado!' });
  res.json(item);
});

router.post('/estoque', validarEstoque, async (req, res) => {
  const novoItem = await EstoqueModel.create(req.body);
  res.status(201).json(novoItem);
});

router.put('/estoque/:id', validarId, validarEstoqueAtualizacao, async (req, res) => {
  const atualizado = await EstoqueModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!atualizado) return res.status(404).json({ message: 'Item do estoque não encontrado!' });
  res.json(atualizado);
});

router.delete('/estoque/:id', validarId, async (req, res) => {
  const removido = await EstoqueModel.findByIdAndDelete(req.params.id);
  if (!removido) return res.status(404).json({ message: 'Item do estoque não encontrado!' });
  res.status(204).send();
});

module.exports = router;
