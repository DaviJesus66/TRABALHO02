const yup = require('yup');
const validateYup = require('./validateYup');


const clienteSchema = yup.object().shape({
nome: yup.string().required(),
email: yup.string().email().required(),
cpf: yup.string().length(11).required(),
telefone: yup.string().nullable(),
});


module.exports = validateYup(clienteSchema);