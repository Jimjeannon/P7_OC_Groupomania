
const dbc = require("../server/database");

module.exports = (req, res, next) => {
  try {
    if (req.cookies.jwt) {
     
      let db = dbc.getDB();
      const sql = `SELECT user_id FROM users WHERE user_id = ${userId}`;
      db.query(sql, (err, result) => {
        if (err) res.status(204).json(err);
        else {
          next();
        }
      });
    } else {
      res.clearCookie();
      res.status(401).json({ message: "Unauthorized"});
    }
  } catch (err) {
    res.clearCookie();
    console.log(err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

