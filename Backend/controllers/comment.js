const dbc = require("../server/database");
const db = dbc.getDB();

exports.comment = (req, res, next) => {
    
    const user_id = req.params.id;
    const name = req.body.data.pseudo;
    const message = req.body.data.message;
    const post_id = req.body.data.idPost;

    let sqlComment = `INSERT INTO comment ( user_id, message, user_name, post_id ) VALUES ( '${user_id}', '${message}', '${name}', '${post_id}' )`;
    
    db.query(sqlComment, function(err, result) {
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
    
    const newProfil = profil.replace(/","/g, '",').replace(/":"/g, '="').replace('{"', '').replace('}', '').replace(/"/g, "'");
    let sqlUpdate = `UPDATE comment SET ${newProfil} WHERE id='${com_id}' `;
    
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
    let com_id = req.params.idCom;

    let sqlDelete = `DELETE FROM comment WHERE id_com ='${com_id}'`;
    
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

exports.allComment = (req, res, next) => {
    const sqlAll = `SELECT comment.id_com AS id_com,comment.user_id AS u_id,comment.message AS message_com, user_name,post_id FROM comment JOIN post ON (post.id = comment.post_id) WHERE post_id ORDER BY date DESC`
    db.query(sqlAll, (err, result) => {
        if (err) {
            return res.status(404).json({
                message: "tout les com erreur"
            });
        } else {
            return res.status(200).json(
                result
            );
        }
    })
}