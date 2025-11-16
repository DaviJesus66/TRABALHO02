module.exports = (schema) => async (req, res, next) => {
  try {
    const validatedBody = await schema.validate(req.body, { abortEarly: false, stripUnknown: true });
    req.body = validatedBody;
    next();
  } catch (error) {
    return res.status(400).json({ erros: error.errors || ['Erro na validação dos dados'] });
  }
};
