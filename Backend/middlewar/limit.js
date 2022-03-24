// Utulisation de limit rate express pour limiter les nb d'essais mdt 
const limit = require("express-rate-limit")

const limiter = limit({
    windowMs: 10 * 60 * 1000,
    max: 5,
    message: "Compte est bloqué 10min, nombre d'essais 5 maximum",
    standardHeaders: true,
    legacyHeaders: false,
})

module.exports = {
    limiter
}