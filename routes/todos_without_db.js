const express = require('express');
const router = express.Router();
const TodosWithoutDbController = require('../controllers/todos_without_db');

router.get('/', TodosWithoutDbController.getAll);
router.post('/', TodosWithoutDbController.create);
router.get('/:id', TodosWithoutDbController.getById);
router.put('/:id', TodosWithoutDbController.update);
router.delete('/:id', TodosWithoutDbController.delete);

module.exports = router;
