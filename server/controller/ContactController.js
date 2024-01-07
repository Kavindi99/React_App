const {router} = require("express/lib/application");
const ContactController ={

    SubmitContactDetails : function (req, res, next) {
        const requestedData = req.body; // req rek use kre data tika access krl pllehin log krgnn
        console.log(requestedData); // log krgnnwa access krpu data tika
        res.send("Contact Details received successfully");
    }

}
module.exports = ContactController;