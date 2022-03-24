//multer : pour gerer les requetes HTTP avec envoie de fichier 
const multer = require('multer');



// repertoire des MIME_TYPES
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

//destination du fichier et faire un nom de fichier unique 

const storage = multer.diskStorage({

    // destination de stockage fichier 
    destination: (req, file, callback) => {

        callback(null, 'images');

    },

    // Modification nom du fichier 
    filename: (req, file, callback) => {
        const id = req.params.id;
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + id + '.' + extension);
    }
});

module.exports = multer({
    storage: storage
}).single('image');