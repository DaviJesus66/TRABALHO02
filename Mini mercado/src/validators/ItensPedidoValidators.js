const yup = require('yup');

const itensPedidoSchema = yup.object().shape({
  pedido: yup
    .string()
    .required('ID do pedido é obrigatório')
    .trim(),
  produto: yup
    .string()
    .required('ID do produto é obrigatório')
    .trim(),
  quantidade: yup
    .number()
    .required('Quantidade é obrigatória')
    .min(1, 'Quantidade mínima: 1'),
  precoUnitario: yup
    .number()
    .required('Preço unitário é obrigatório')
    .min(0, 'Preço unitário não pode ser negativo'),
});

async function validarItensPedido(req, res, next) {
  try {
    await itensPedidoSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const itensPedidoAtualizarSchema = yup.object().shape({
  pedido: yup.string().trim(),
  produto: yup.string().trim(),
  quantidade: yup.number().min(1, 'Quantidade mínima: 1'),
  precoUnitario: yup.number().min(0, 'Preço unitário não pode ser negativo'),
});

async function validarItensPedidoAtualizacao(req, res, next) {
  try {
    await itensPedidoAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarItensPedido, validarItensPedidoAtualizacao };

