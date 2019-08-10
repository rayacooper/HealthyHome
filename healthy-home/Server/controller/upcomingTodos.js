const express = require('express');
const router = express.Router();
const upcomingService = require('../Services/upcomingTodos');

router.get('/user', async (req, res, next) => {
    res.send(await upcomingService.getUpcomingTodos(req))
})

module.exports = router;