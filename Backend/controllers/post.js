const dbc = require("../server/database");
const db = dbc.getDB();

exports.publish = (req, res, next) => {
  const  poster_id = req.body.poster_id;
  const name_poster = req.body.name_poster;
  const message = req.body.message;
  console.log(name_poster)
  let sqlPublish = `INSERT INTO post ( poster_id, message, name_poster ) VALUES ( '${poster_id}', '${message}', '${name_poster}' )`;
         
  db.query(sqlPublish, function (err, result) {
      if (err) {
          return res.status(400).json(err.message);
      };
      res.status(200).json({
          message: "publication non valide !"
      });
  }); 
};

exports.updateOne = (req, res, next) => {
    const profil = JSON.stringify(req.body);
    console.log(profil)
 const newProfil = profil.replace(/","/g, '",').replace(/":"/g, '="').replace('{"', '').replace('}', '').replace(/"/g,"'");
 console.log(newProfil);
 let user_id = req.body.id
 
 let sqlUpdate = `UPDATE post SET ${newProfil} WHERE id='${user_id}' `;
 console.log(sqlUpdate)
db.query(sqlUpdate, (err, result) => {
    if (err) {
        return res.status(500).json(err.message);
    };
    res.status(200).json({
        message: "info trouvé"
    });
    console.log("compte mis a jour !")
})
};

exports.deletePublish = (req, res, next) => {
    let poster_id = req.body.poster_id;
    let sqlDelete = `DELETE FROM post WHERE poster_id='${poster_id}'`;
    db.query(sqlDelete, (err, result) => {
        if (err) {
            return res.status(500).json(err.message);
        };
        res.status(200).json({
            message: "info trouvé"
        });
        console.log("compte supress !")
    })
};

exports.allPublish = (req, res, next) => {
    const sqlAll = `SELECT message, image, video, name_poster FROM post `
    db.query(sqlAll, (err, result) => {
    if (err) {
        console.log("Post error")
    }else {
        res.status(200).json({
            message: "Voila le post !"
        });
        console.log(result);
    }
    })
};

exports.onePublish = (req, res, next) => {
const _id = req.body.id;
console.log(_id)
const sqlOne = `SELECT * FROM post WHERE id ='${_id}'`
db.query(sqlOne, (err, result) => {
if (err) {
    console.log("errer")
}else {
    res.status(200).json({
        message: "Voila le post !"
    });
     console.log(result);
}
})
};



