const dbc = require("../server/database");
const db = dbc.getDB();

exports.publish = (req, res, next) => {  
    if (req.file) {  
  const  user_id = req.params.id;
  const name_poster = req.body.nom;
  const message = req.body.message;
  const image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
  let sqlPublish = `INSERT INTO post ( user_id, message, name_poster, image ) VALUES ( '${user_id}', '${message}', '${name_poster}', '${image}')`;
         
  db.query(sqlPublish, function (err, result) {
      if (err) {
          return res.status(404).json({
            message: "Publication erreur"
        });
      }else{
          res.status(200).json({
          message: "Publication valide !"
      });
      }
      
  }); 
} else{
    const  user_id = req.params.id;
    const name_poster = req.body.nom;
    const message = req.body.message; 
    let sqlPublish = `INSERT INTO post ( user_id, message, name_poster ) VALUES ( '${user_id}', '${message}', '${name_poster}')`;
    db.query(sqlPublish, function (err, result) {
        if (err) {
            return res.status(404).json({
              message: "Publication erreur"
          });
        }else{
            res.status(200).json({
            message: "Publication valide !"
        });
        }
        
    });
}
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
    if (err)  if (err) {
        return res.status(404).json({
          message: "Modification erreur"
      });
    };
    res.status(200).json({
        message: "Modification reussie !"
    });
})
};

exports.deletePublish = (req, res, next) => {
    let poster_id = req.params.id;;
    console.log(poster_id);
    let sqlDelete = `DELETE FROM post WHERE user_id='${poster_id}'`;
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
};

exports.allPublish = (req, res, next) => {
    const sqlAll = `SELECT * FROM post ORDER BY date DESC LIMIT 5 `
    db.query(sqlAll, (err, result) => {
        if (err) {
            return res.status(404).json({
              message: "tout les post erreur"
          });
        }else {
         return res.status(200).json(
            result
        );
    }
    })
};

exports.onePublish = (req, res, next) => {
const _id = req.body.id;
console.log(_id)
const sqlOne = `SELECT * FROM post WHERE id ='${_id}'`
db.query(sqlOne, (err, result) => {
    if (err) {
        return res.status(404).json({
          message: "Publication erreur"
      });
    }else {
    res.status(200).json({
        message: "Voila le post !"
    });
     console.log(result);
}
})
};



