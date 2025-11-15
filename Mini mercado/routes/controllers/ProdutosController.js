const express = require('express');
const router = express.Router();

const ProdutosModel = require('../models/ProdutosModel');
const { validarId } = require('../validators/IDValidator');
const { validarProduto, validarProdutoAtualizacao } = require('../validators/ProdutoValidator');

router.get('/produtos', async (req, res) => {
  const produtos = await ProdutoModel.find();
  res.json(produtos);
});

router.get('/produtos/:id', validarId, async (req, res) => {
  const produto = await ProdutoModel.findById(req.params.id);
  if (!produto) {
    return res.status(404).json({ message: 'Produto não encontrado!' });
  }
  res.json(produto);
});

router.post('/produtos', validarProduto, async (req, res) => {
  const novoProduto = await ProdutoModel.create(req.body);
  res.status(201).json(novoProduto);
});

router.put('/produto/:id', validarId, validarProdutoAtualizacao, async (req, res) => {
  const updatedProduto = await ProdutoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedProduto) {
    return res.status(404).json({ message: 'Produto não encontrado!' });
  }
  res.json(updatedProduto);
});

router.delete('/produtos/:id', validarId, async (req, res) => {
  const deletedProduto = await ProdutoModel.findByIdAndDelete(req.params.id);
  if (!deletedProduto) {
    return res.status(404).json({ message: 'Produto não encontrado!' });
  }
  res.status(204).send();
});

module.exports = router;