const fs = require("fs");
const dbc = require("../server/database");
const db = dbc.getDB();


// ajouter une image de profile 

exports.uploadImage = (req, res, next) => {
    
    const id = req.params.id;
   const image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
  
   let sqlUpdate = `UPDATE users SET imageUrl= '${image}' WHERE id='${id}' `;
 
db.query(sqlUpdate, (err, result) => {
    if (err) {
        return res.status(404).json({
            message: "Image erreur"
        });
    };
    res.status(200).json({
        message: "Image trouvé"
    });
})       
 
}
