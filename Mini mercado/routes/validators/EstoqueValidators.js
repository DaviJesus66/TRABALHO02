const yup = require('yup');

const estoqueSchema = yup.object().shape({
  produto: yup.string().required('ID do produto obrigatório'),
  quantidade: yup.number().required('Quantidade obrigatória').min(0)
});

async function validarEstoque(req, res, next) {
  try {
    await estoqueSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const estoqueAtualizaSchema = yup.object().shape({
  produto: yup.string(),
  quantidade: yup.number().min(0)
});

async function validarEstoqueAtualizacao(req, res, next) {
  try {
    await estoqueAtualizaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarEstoque, validarEstoqueAtualizacao };
