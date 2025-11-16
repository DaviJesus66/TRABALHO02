const express = require('express');
const router = express.Router();

const ProdutosModel = require('../models/ProdutosModels');
const { validarId } = require('../validators/IDValidator');
const { validarProduto, validarProdutoAtualizacao } = require('../validators/ProdutosValidators');

router.get('/produtos', async (req, res) => {
  try {
    const produtos = await ProdutosModel.find();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos.', error });
  }
});

router.get('/produtos/:id', validarId, async (req, res) => {
  try {
    const produto = await ProdutosModel.findById(req.params.id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado!' });
    }
    res.json(produto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produto.', error });
  }
});

router.post('/produtos', validarProduto, async (req, res) => {
  try {
    const novoProduto = await ProdutosModel.create(req.body);
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto.', error });
  }
});

router.put('/produtos/:id', validarId, validarProdutoAtualizacao, async (req, res) => {
  try {
    const updatedProduto = await ProdutosModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduto) {
      return res.status(404).json({ message: 'Produto não encontrado!' });
    }
    res.json(updatedProduto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto.', error });
  }
});

router.delete('/produtos/:id', validarId, async (req, res) => {
  try {
    const deletedProduto = await ProdutosModel.findByIdAndDelete(req.params.id);
    if (!deletedProduto) {
      return res.status(404).json({ message: 'Produto não encontrado!' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover produto.', error });
  }
});

module.exports = router;
