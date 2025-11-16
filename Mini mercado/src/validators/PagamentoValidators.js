const yup = require('yup');

const pagamentoSchema = yup.object().shape({
  pedido: yup.string().required('ID do pedido obrigatório'),
  valor: yup.number().required('Valor obrigatório').min(0),
  forma_pagamento: yup.string().required('Forma de pagamento obrigatória')
});

async function validarPagamento(req, res, next) {
  try {
    await pagamentoSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const pagamentoAtualizaSchema = yup.object().shape({
  pedido: yup.string(),
  valor: yup.number().min(0),
  forma_pagamento: yup.string()
});

async function validarPagamentoAtualizacao(req, res, next) {
  try {
    await pagamentoAtualizaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarPagamento, validarPagamentoAtualizacao };
