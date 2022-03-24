const dbc = require("../server/database");
const db = dbc.getDB();

exports.like = (req, res, next) => {

    let postId = req.body.data;
    const user_id = req.params.id;


    let likePost = `INSERT INTO postlike (user_id, post_id) VALUES ('${user_id}', '${postId}')`;

    db.query(likePost, function(err, result) {
        if (err) {
            return res.status(404).json({
                message: "Like err"
            });
        } else {
            res.status(200).json({
                message: "Like valide !"
            });
        };
    })
}

exports.dislike = (req, res, next) => {

    const likeId = req.params.id;


    let dislike = `DELETE FROM postlike WHERE idlike='${likeId}'`;

    db.query(dislike, function(err, result) {
        if (err) {
            return res.status(404).json({
                message: "dislike err"
            });
        } else {
            res.status(200).json({
                message: "dilike valide !"
            });
        };
    })
}


exports.numberlike = (req, res, next) => {

    let numblike = `SELECT COUNT(postlike.post_id) AS Nblike, post_id, user_id FROM postlike GROUP BY post_id`;

    db.query(numblike, function(err, result) {
        if (err) {
            return res.status(404).json({
                message: "dislike err"
            });
        } else {
            res.status(200).json({
                result
            });
        };
    })
}