const yup = require('yup');

const pagamentoSchema = yup.object().shape({
  pedido: yup
    .string()
    .required('ID do pedido é obrigatório')
    .trim(),
  valor: yup
    .number()
    .required('Valor é obrigatório')
    .min(0, 'Valor não pode ser negativo'),
  formaPagamento: yup
    .string()
    .required('Forma de pagamento é obrigatória')
    .trim(),
});

async function validarPagamento(req, res, next) {
  try {
    await pagamentoSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const pagamentoAtualizarSchema = yup.object().shape({
  pedido: yup.string().trim(),
  valor: yup.number().min(0, 'Valor não pode ser negativo'),
  formaPagamento: yup.string().trim(),
});

async function validarPagamentoAtualizacao(req, res, next) {
  try {
    await pagamentoAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarPagamento, validarPagamentoAtualizacao };

