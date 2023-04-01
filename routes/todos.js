const express = require('express');
const router = express.Router();
const TodosController = require('../controllers/todos');

router.get('/', TodosController.getAll);
router.post('/', TodosController.create);
router.get('/:id', TodosController.getById);
router.put('/:id', TodosController.update);
router.delete('/:id', TodosController.delete);

module.exports = router;
