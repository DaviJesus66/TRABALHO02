const yup = require('yup');

const estoqueSchema = yup.object().shape({
  produto: yup
    .string()
    .required('ID do produto é obrigatório')
    .trim(),
  quantidade: yup
    .number()
    .required('Quantidade é obrigatória')
    .min(0, 'Quantidade não pode ser negativa'),
});

async function validarEstoque(req, res, next) {
  try {
    await estoqueSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const estoqueAtualizarSchema = yup.object().shape({
  produto: yup.string().trim(),
  quantidade: yup
    .number()
    .min(0, 'Quantidade não pode ser negativa'),
});

async function validarEstoqueAtualizacao(req, res, next) {
  try {
    await estoqueAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarEstoque, validarEstoqueAtualizacao };

