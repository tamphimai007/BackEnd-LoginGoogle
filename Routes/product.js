const express = require('express')
const router = express.Router()

router.get('/product', (req, res) => {
    //code
    res.send('hello product 555')
})

module.exports = router;