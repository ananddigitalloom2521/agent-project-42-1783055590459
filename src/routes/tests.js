const express = require('express');
const router = express.Router();
const testModel = require('../models/test');
router.get('/', async (req, res) => {
  try {
    const tests = await testModel.findAll();
    res.json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const test = await testModel.create(req.body);
    res.json(test);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const test = await testModel.findByPk(req.params.id);
    res.json(test);
  } catch (error) {
    res.status(404).json({ message: 'Test not found' });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const test = await testModel.update(req.body, { where: { id: req.params.id } });
    res.json(test);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    await testModel.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Test deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;