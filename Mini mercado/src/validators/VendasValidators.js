const yup = require('yup');

const vendaSchema = yup.object().shape({
  pedido: yup
    .string()
    .required('ID do pedido é obrigatório')
    .trim(),
  funcionario: yup
    .string()
    .required('ID do funcionário é obrigatório')
    .trim(),
  data: yup
    .date()
    .typeError('A data deve ser válida'),
});

async function validarVenda(req, res, next) {
  try {
    await vendaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const vendaAtualizarSchema = yup.object().shape({
  pedido: yup.string().trim(),
  funcionario: yup.string().trim(),
  data: yup.date().typeError('A data deve ser válida'),
});

async function validarVendaAtualizacao(req, res, next) {
  try {
    await vendaAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarVenda, validarVendaAtualizacao };
