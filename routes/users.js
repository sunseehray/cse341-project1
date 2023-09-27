const express = require('express');
const router = express.Router();
const { ValidationRules, validate } = require('../validator');

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

router.post('/', ValidationRules(), validate, usersController.createUser);

router.put('/:id', ValidationRules(), validate, usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

module.exports = router;