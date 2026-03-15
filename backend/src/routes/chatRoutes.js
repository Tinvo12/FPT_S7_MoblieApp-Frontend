const express = require('express');
const chatController = require('../controllers/chatController');
// const auth = require('../middlewares/auth'); // In real app, add auth middleware

const router = express.Router();

router.get('/history/:bookingId', chatController.getHistory);
router.patch('/read/:messageId', chatController.markRead);

module.exports = router;
