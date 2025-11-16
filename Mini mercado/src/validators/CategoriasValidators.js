const yup = require('yup');

const categoriaSchema = yup.object().shape({
  nome: yup
    .string()
    .required('O nome da categoria é obrigatório')
    .min(3, 'O nome da categoria deve ter pelo menos 3 caracteres'),
  descricao: yup
    .string()
    .required('A descrição da categoria é obrigatória')
    .min(5, 'A descrição da categoria deve ter pelo menos 5 caracteres'),
  tipo: yup
    .string()
    .required('O tipo da categoria é obrigatório')
    .min(5, 'O tipo da categoria deve ter pelo menos 5 caracteres'),
});

async function validarCategoria(req, res, next) {
  try {
    await categoriaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const categoriaAtualizarSchema = yup.object().shape({
  nome: yup.string().min(3, 'O nome da categoria deve ter pelo menos 3 caracteres'),
  descricao: yup.string().min(5, 'A descrição da categoria deve ter pelo menos 5 caracteres'),
  tipo: yup.string().min(5, 'O tipo da categoria deve ter pelo menos 5 caracteres'),
});

async function validarCategoriaAtualizacao(req, res, next) {
  try {
    await categoriaAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarCategoria, validarCategoriaAtualizacao };

