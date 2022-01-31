// Verification du mot de passe avec RegExp
module.exports = (req, res, next) => {
    function validPass(password) {
        let validPass = RegExp(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/);
        let test = validPass.test(password);
        if (test) {
            console.log("Password ok")
            next()
        } else {
            console.log("Password")
            res.status(400).json({
                message: 'Mot de passe require 6 characters, un nombre, une majuscule'
            });
        }
        return test
    }
    validPass(req.body.password);
  };