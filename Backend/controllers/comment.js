const dbc = require("../server/database");
const db = dbc.getDB();

exports.comment = (req, res, next) => {
    const user_id = req.body.user_id;
    const name_poster = req.body.user_name;
    const message = req.body.message;
    console.log(name_poster)
    let sqlComment = `INSERT INTO comment ( user_id, message, user_name ) VALUES ( '${user_id}', '${message}', '${name_poster}' )`;
           
    db.query(sqlComment, function (err, result) {
        if (err) {
            return res.status(404).json({
                message: "Commentaire erreur"
            });
        };
        res.status(200).json({
            message: "Commentaire valide !"
        });
    }); 
}

exports.modifCom = (req, res, next) => {
    const com_id = req.body.id;
    const profil = JSON.stringify(req.body);
    console.log(com_id)
 const newProfil = profil.replace(/","/g, '",').replace(/":"/g, '="').replace('{"', '').replace('}', '').replace(/"/g,"'");
    let sqlUpdate = `UPDATE comment SET ${newProfil} WHERE id='${com_id}' `;
 console.log(sqlUpdate)
db.query(sqlUpdate, (err, result) => {
    if (err) {
        return res.status(404).json({
            message: "Modification erreur !"
        });
    };
    res.status(200).json({
        message: "Commentaire modifié"
    });
})
}

exports.delete = (req, res, next) => {
    let com_id = req.body.id;
    let sqlDelete = `DELETE FROM comment WHERE id='${com_id}'`;
    db.query(sqlDelete, (err, result) => {
        if (err) {
            return res.status(404).json({
                message: "Supretion erreur "
            });
        };
        res.status(200).json({
            message: "Commentaire suprimé !"
        });
    })
}

exports.likeComment = (req, res, next) => {
    
}