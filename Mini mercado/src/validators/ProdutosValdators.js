const yup = require('yup');

const produtoSchema = yup.object().shape({
  nome: yup
    .string()
    .required('O nome do produto é obrigatório')
    .min(3, 'O nome do produto deve ter pelo menos 3 caracteres')
    .trim(),
  descricao: yup
    .string()
    .required('A descrição do produto é obrigatória')
    .min(10, 'A descrição do produto deve ter pelo menos 10 caracteres')
    .trim(),
  valor: yup
    .number()
    .required('O valor do produto é obrigatório')
    .min(10.00, 'O valor deve ser no mínimo R$ 10,00'),
});

async function validarProduto(req, res, next) {
  try {
    await produtoSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const produtoAtualizarSchema = yup.object().shape({
  nome: yup
    .string()
    .min(3, 'O nome do produto deve ter pelo menos 3 caracteres')
    .trim(),
  descricao: yup
    .string()
    .min(10, 'A descrição do produto deve ter pelo menos 10 caracteres')
    .trim(),
  valor: yup
    .number()
    .min(10.00, 'O valor deve ser no mínimo R$ 10,00'),
});

async function validarProdutoAtualizacao(req, res, next) {
  try {
    await produtoAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarProduto, validarProdutoAtualizacao };
