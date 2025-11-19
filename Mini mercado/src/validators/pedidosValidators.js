const yup = require('yup');
const validateYup = require('./validateYup');

const itemSchema = yup.object().shape({
  produtoId: yup
    .string()
    .required('O ID do produto é obrigatório')
    .trim(),
  quantidade: yup
    .number()
    .min(1, 'A quantidade mínima é 1')
    .required('A quantidade é obrigatória'),
  precoUnitario: yup
    .number()
    .min(0, 'O preço unitário não pode ser negativo')
    .required('O preço unitário é obrigatório'),
});

const pedidoSchema = yup.object().shape({
  cliente: yup
    .string()
    .required('O ID do cliente é obrigatório')
    .trim(),
  itens: yup
    .array()
    .of(itemSchema)
    .min(1, 'Ao menos um item deve ser informado no pedido')
    .required('A lista de itens é obrigatória'),
  total: yup
    .number()
    .min(0, 'O valor total não pode ser negativo')
    .required('O valor total é obrigatório'),
});

// criação
const validarPedidos = validateYup(pedidoSchema);

// atualização
const validarPedidosAtualizacao = validateYup(pedidoSchema, { isUpdate: true });

module.exports = {
  validarPedidos,
  validarPedidosAtualizacao,
};
