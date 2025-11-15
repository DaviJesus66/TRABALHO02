const express = require('express');
const router = express.Router();

const FornecedoresModel = require('../models/FornecedoresModel');
const { validarId } = require('../validators/IDValidator');
const { validarFornecedor, validarFornecedorAtualizacao } = require('../validators/FornecedorValidator');

router.get('/Fornecedores', async (req, res) => {
  const Fornecedores = await FornecedorModel.find();
  res.json(Fornecedores);
});

router.get('/Fornecedores/:id', validarId, async (req, res) => {
  const Fornecedor = await FornecedorModel.findById(req.params.id);
  if (!Fornecedores) {
    return res.status(404).json({ message: 'Fornecedor não encontrado!' });
  }
  res.json(Fornecedor);
});

router.post('/Fornecedores', validarFornecedor, async (req, res) => {
  const novoFornecedor = await FornecedorModel.create(req.body);
  res.status(201).json(novoFornecedor);
});

router.put('/Fornecedores/:id', validarId, validarFornecedorAtualizacao, async (req, res) => {
  const updatedFornecedor = await FornecedorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedFornecedor) {
    return res.status(404).json({ message: 'Fornecedor não encontrado!' });
  }
  res.json(updatedFornecedor);
});

router.delete('/Fornecedores/:id', validarId, async (req, res) => {
  const deletedFornecedor = await FornecedorModel.findByIdAndDelete(req.params.id);
  if (!deletedFornecedor) {
    return res.status(404).json({ message: 'Fornecedor não encontrado!' });
  }
  res.status(204).send();
});

module.exports = router;