const path = require('path');

module.exports = {
    register : (req,res) => res.sendFile(path.join(__dirname,'..', 'views', 'register.html' )),
    login : (req,res) => res.sendFile(path.join(__dirname,'..', 'views', 'login.html' )),
    profile : (req,res) => res.sendFile(path.join(__dirname,'..', 'views', 'profile.html' ))
}