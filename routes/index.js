const router = require('express').Router();

router.get('/', (req, res) => {res.send('Sunseehray Tirazona');});

router.use('/users', require('./users'));

module.exports = router;