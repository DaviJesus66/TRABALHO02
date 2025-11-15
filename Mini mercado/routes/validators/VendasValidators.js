const yup = require('yup');

const vendaSchema = yup.object().shape({
  pedido: yup.string().required('ID do pedido obrigatório'),
  funcionario: yup.string().required('ID do funcionário obrigatório'),
  data: yup.date()
});

async function validarVenda(req, res, next) {
  try {
    await vendaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const vendaAtualizaSchema = yup.object().shape({
  pedido: yup.string(),
  funcionario: yup.string(),
  data: yup.date()
});

async function validarVendaAtualizacao(req, res, next) {
  try {
    await vendaAtualizaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarVenda, validarVendaAtualizacao };
