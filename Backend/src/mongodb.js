const mongoose = require("mongoose");
require("dotenv").config();
const { USER_DB, KEY_DB, URI_DB } = process.env;


mongoose.connect(`mongodb+srv://${USER_DB}:${KEY_DB}@${URI_DB}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
  .then(db => console.log("Database is connect"))
  .catch(err => console.log(err))
  