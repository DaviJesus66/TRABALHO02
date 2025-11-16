const yup = require('yup');
const validateYup = require('./validateYup');

const clienteSchema = yup.object().shape({
  nome: yup
    .string()
    .required('O nome é obrigatório')
    .trim(),
  email: yup
    .string()
    .email('O e-mail deve ser válido')
    .required('O e-mail é obrigatório')
    .trim(),
  cpf: yup
    .string()
    .length(11, 'O CPF deve ter exatamente 11 dígitos')
    .required('O CPF é obrigatório'),
  telefone: yup
    .string()
    .nullable()
    .trim(),
});

module.exports = validateYup(clienteSchema);
