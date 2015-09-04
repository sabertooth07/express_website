var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

router.post('/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'raghuv.adhepalli@gmail.com',
            pass: 'MR.football'
        }
    });
    var mailOptions = {
        from: 'Rad Master <radmaster@gmail.com>', // sender address
        to: 'raghuv.adhepalli@gmail.com', // list of receivers
        subject: 'Website submission', // Subject line
        text: 'You have a new submission. Here are the details Name: '+req.body.name+' Email: '+req.body.email, // plaintext body
        html: '<p>Message received: <b>'+req.body.message+'</b></p>' // html body
    };
    
    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            res.redirect('/');
            return console.log("Raghuv "+error);
        }
        console.log("Message sent: "+info.response);
        res.redirect('/');
    })
});

module.exports = router;
