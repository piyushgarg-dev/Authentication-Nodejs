const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.json({
        Ques:'Auth is success'
    });
});


module.exports = router;