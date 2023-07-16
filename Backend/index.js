const server = require("./src/server");
require("./src/mongodb");
require("dotenv").config();

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`%s listening at ${port}`)
});