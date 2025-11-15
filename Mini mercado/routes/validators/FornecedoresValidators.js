const yup = require('yup');

const fornecedorSchema = yup.object().shape({
  nome: yup.string().required('O nome do fornecedor é obrigatório').min(3, 'O nome do fornecedor deve ter pelo menos 3 caracteres'),
  descricao: yup.string().required('A descrição do fornecedor é obrigatória').min(10, 'A descrição do fornecedor deve ter pelo menos 10 caracteres'),
  cnpj: yup.number().required('O valor do fornecedor é obrigatório').min(1518.00, 'O valor deve ser no mínimo R$ 1.000,00'),
})

async function validarFornecedor(req, res, next) {
  try {
    await fornecedorSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const fornecedorAtualizarSchema = yup.object().shape({
  nome: yup.string().min(3, 'O nome do fornecedor deve ter pelo menos 3 caracteres'),
  descricao: yup.string().min(10, 'A descrição do fornecedor deve ter pelo menos 10 caracteres'),
  salario: yup.number().min(1518.00, 'O valor deve ser no mínimo R$ 1.000,00'),
})

async function validarFornecedorAtualizacao(req, res, next) {
  try {
    await fornecedorAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarFornecedor, validarFornecedorAtualizacao };