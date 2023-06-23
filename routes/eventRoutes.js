const express = require('express');
const router = express.Router();
const {createEvent, registerEvent} = require("../controllers/eventControllers");

router.post('/register', registerEvent );

router.post('/create', createEvent );

module.exports = router;