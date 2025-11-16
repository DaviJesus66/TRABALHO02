const yup = require('yup');
const validateYup = require('./validateYup');


const funcionarioSchema = yup.object().shape({
nome: yup.string().required(),
cargo: yup.string().required(),
email: yup.string().email().required(),
salario: yup.number().min(0).required(),
});


module.exports = validateYup(funcionarioSchema);