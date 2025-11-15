const yup = require('yup');

const itensPedidoSchema = yup.object().shape({
  pedido: yup.string().required('ID do pedido obrigatório'),
  produto: yup.string().required('ID do produto obrigatório'),
  quantidade: yup.number().required('Quantidade obrigatória').min(1),
  preco_unitario: yup.number().required('Preço unitário obrigatório').min(0)
});

async function validarItensPedido(req, res, next) {
  try {
    await itensPedidoSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const itensPedidoAtualizaSchema = yup.object().shape({
  pedido: yup.string(),
  produto: yup.string(),
  quantidade: yup.number().min(1),
  preco_unitario: yup.number().min(0)
});

async function validarItensPedidoAtualizacao(req, res, next) {
  try {
    await itensPedidoAtualizaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarItensPedido, validarItensPedidoAtualizacao };
