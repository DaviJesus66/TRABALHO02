const Cliente = require('../models/Cliente');


module.exports = {
async index(req, res) {
const data = await Cliente.find();
return res.json(data);
},


async show(req, res) {
const item = await Cliente.findById(req.params.id);
if (!item) return res.status(404).json({ error: 'Cliente não encontrado' });
return res.json(item);
},


async store(req, res) {
const exists = await Cliente.findOne({ email: req.body.email });
if (exists) return res.status(400).json({ error: 'Email já existe' });
const created = await Cliente.create(req.body);
return res.status(201).json(created);
},


async update(req, res) {
const updated = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!updated) return res.status(404).json({ error: 'Cliente não encontrado' });
return res.json(updated);
},


async destroy(req, res) {
await Cliente.findByIdAndDelete(req.params.id);
return res.status(204).send();
},
};