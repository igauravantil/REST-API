const express = require('express')
const router = express.Router();
router.use("/",(req,res) => {
    res.send("Project started")
})
module.exports = router