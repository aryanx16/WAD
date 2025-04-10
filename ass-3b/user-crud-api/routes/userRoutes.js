const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getUser,
    updateUser
} = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);

module.exports = router;
