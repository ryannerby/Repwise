const { Router } = require('express');
const userController = require('../controllers/userController');
const router = Router();

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;
