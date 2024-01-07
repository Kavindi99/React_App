const express = require('express');
const router = express.Router();

let ContactController = require('../controller/ContactController');

// router.post('/submit', function (req, res, next) {
//     const requestedData = req.body; // req rek use kre data tika access krl pllehin log krgnn
//     console.log(requestedData); // log krgnnwa access krpu data tika
//     res.send("Contact Details received successfully"); // response ekn adalawa msg ekk frontend ektath pass karanawa
// })

//changes for this line, Contact controller ekata cut karala dapu nisa eka run wenna kiyala kiwwa
router.post('/submit', ContactController.SubmitContactDetails);

module.exports = router; // module ekk vidiyt  export karanawa eliyata router eka