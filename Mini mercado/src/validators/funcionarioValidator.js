const yup = require('yup');
const validateYup = require('./validateYup');

const funcionarioSchema = yup.object().shape({
  nome: yup
    .string()
    .required('O nome do funcionário é obrigatório')
    .trim(),
  cargo: yup
    .string()
    .required('O cargo do funcionário é obrigatório')
    .trim(),
  email: yup
    .string()
    .email('O e-mail deve ser válido')
    .required('O e-mail do funcionário é obrigatório')
    .trim(),
  salario: yup
    .number()
    .min(0, 'O salário não pode ser negativo')
    .required('O salário do funcionário é obrigatório'),
});

module.exports = validateYup(funcionarioSchema);
