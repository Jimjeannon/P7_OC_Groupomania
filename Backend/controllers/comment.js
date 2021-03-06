const dbc = require("../server/database");
const db = dbc.getDB();

// Ajouter un commentaire à la base database 

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

// Supprimer un comentaire 

exports.delete = (req, res, next) => {
    let com_id = req.params.idCom;
    let user_id = req.params.id;
    let sqlAdmin = `SELECT Admin FROM users WHERE id = '${user_id}'`;

    db.query(sqlAdmin, (err, result) => {

        let admin = result[0].Admin;


        let sqlCheck = `SELECT user_id FROM comment WHERE id_com='${com_id}'`;
        db.query(sqlCheck, (err, result) => {

            if (admin == null && result[0].user_id != user_id) {
                return res.status(404).json({
                    message: "Supression non authorisé"
                });
            } else {
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
        })
    })
}

// Afficher tout les commentaires

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