const express = require('express');
const router = express.Router();

const FuncionariosModel = require('../models/FuncionariosModels');
const { validarId } = require('../validators/IDValidator');
const { validarFuncionarios, validarFuncionariosAtualizacao } = require('../validators/FuncionariosValidators');

router.get('/funcionarios', async (req, res) => {
  try {
    const funcionarios = await FuncionariosModel.find();
    res.json(funcionarios);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar funcionarios.', error });
  }
});

router.get('/funcionarios/:id', validarId, async (req, res) => {
  try {
    const funcionarios = await FuncionariosModel.findById(req.params.id);
    if (!funcionarios) {
      return res.status(404).json({ message: 'Funcionarios não encontrada!' });
    }
    res.json(funcionarios);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar funcionarios.', error });
  }
});

router.post('/funcionarios', validarFuncionarios, async (req, res) => {
  try {
    const novaFuncionarios = await FuncionariosModel.create(req.body);
    res.status(201).json(novaFuncionarios);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar funcionarios.', error });
  }
});

router.put('/funcionarios/:id', validarId, validarFuncionariosAtualizacao, async (req, res) => {
  try {
    const updatedFuncionarios = await FuncionariosModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFuncionarios) {
      return res.status(404).json({ message: 'Funcionarios não encontrado!' });
    }
    res.json(updatedFuncionarios);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar Funcionarios.', error });
  }
});

router.delete('/funcionarios/:id', validarId, async (req, res) => {
  try {
    const deletedFuncionarios = await FuncionariosModel.findByIdAndDelete(req.params.id);
    if (!deletedFuncionarios) {
      return res.status(404).json({ message: 'Funcionarios não encontrado!' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar Funcionarios.', error });
  }
});

module.exports = router;