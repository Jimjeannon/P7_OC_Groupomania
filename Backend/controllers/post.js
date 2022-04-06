const dbc = require("../server/database");
const db = dbc.getDB();

// Creation de post avec ou sans image 

exports.publish = (req, res, next) => {
    if (req.file) {
        const user_id = req.params.id;
        const name_poster = req.body.nom;
        const message = req.body.message;
        const image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
        let sqlPublish = `INSERT INTO post ( user_id, message, name_poster, image ) VALUES ( '${user_id}', '${message}', '${name_poster}', '${image}')`;

        db.query(sqlPublish, function(err, result) {
            if (err) {
                return res.status(404).json({
                    message: "Publication erreur"
                });
            } else {
                res.status(200).json({
                    message: "Publication valide !"
                });
            }

        });
    } else {
        const user_id = req.params.id;
        const name_poster = req.body.nom;
        const message = req.body.message;
        let sqlPublish = `INSERT INTO post ( user_id, message, name_poster ) VALUES ( '${user_id}', '${message}', '${name_poster}')`;
        db.query(sqlPublish, function(err, result) {
            if (err) {
                return res.status(404).json({
                    message: "Publication erreur"
                });
            } else {
                res.status(200).json({
                    message: "Publication valide !"
                });
            }

        });
    }
};

// Suprimer un post avec verification user_id

exports.deletePublish = (req, res, next) => {
    let post_id = req.params.idPost;
    let id_user = req.params.id;
    let sqlAdmin = `SELECT Admin FROM users WHERE id = '${id_user}'`;
    db.query(sqlAdmin, (err, result) => {

        let admin = result[0].Admin;

        let sqlCheck = `SELECT user_id FROM post WHERE id='${post_id}'`;
        db.query(sqlCheck, (err, result) => {
            if (admin == null && result[0].user_id != id_user) {
                return res.status(404).json({
                    message: "Supression non authorisé"
                });
            } else {
                let sqlDelete = `DELETE FROM post WHERE id='${post_id}'`;
                db.query(sqlDelete, (err, result) => {
                    if (err) {
                        return res.status(404).json({
                            message: "Supression erreur"
                        });
                    };
                    res.status(200).json({
                        message: "Post suprimé"
                    });
                })
            }
        })
    })

};

// Afficher tout les posts 

exports.allPublish = (req, res, next) => {
    const sqlAll = `SELECT post.user_id AS user_id, post.message AS message, post.image AS image, post.id AS id, post.name_poster AS name_poster, post.date AS date FROM post ORDER BY date DESC `
    db.query(sqlAll, (err, result) => {
        if (err) {
            return res.status(404).json({
                message: "tout les post erreur"
            });
        } else {
            return res.status(200).json(
                result
            );
        }
    })
};