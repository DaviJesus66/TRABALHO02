const yup = require('yup');
const validateYup = require('./validateYup');


const itemSchema = yup.object().shape({
produtoId: yup.string().required(),
quantidade: yup.number().min(1).required(),
precoUnitario: yup.number().min(0).required(),
});


const pedidoSchema = yup.object().shape({
cliente: yup.string().required(),
itens: yup.array().of(itemSchema).min(1).required(),
total: yup.number().min(0).required(),
});


module.exports = validateYup(pedidoSchema);