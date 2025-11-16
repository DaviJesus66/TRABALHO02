const yup = require('yup');

const fornecedorSchema = yup.object().shape({
  nome: yup
    .string()
    .required('O nome do fornecedor é obrigatório')
    .min(3, 'O nome do fornecedor deve ter pelo menos 3 caracteres'),
  descricao: yup
    .string()
    .required('A descrição do fornecedor é obrigatória')
    .min(10, 'A descrição do fornecedor deve ter pelo menos 10 caracteres'),
  cnpj: yup
    .string()
    .required('O CNPJ do fornecedor é obrigatório')
    .length(14, 'O CNPJ deve ter exatamente 14 dígitos'),
});

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
  cnpj: yup.string().length(14, 'O CNPJ deve ter exatamente 14 dígitos'),
});

async function validarFornecedorAtualizacao(req, res, next) {
  try {
    await fornecedorAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarFornecedor, validarFornecedorAtualizacao };
