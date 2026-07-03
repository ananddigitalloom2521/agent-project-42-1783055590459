const express = require('express');
const router = express.Router();
const resultModel = require('../models/result');
router.get('/', async (req, res) => {
  try {
    const results = await resultModel.findAll();
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const result = await resultModel.create(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const result = await resultModel.findByPk(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: 'Result not found' });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const result = await resultModel.update(req.body, { where: { id: req.params.id } });
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    await resultModel.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Result deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;