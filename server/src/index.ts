import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";
const SERVER_PORT=process.env.port || 3000

createConnection().then(async connection=>{
    // create express app
    const app = express();
    // register express routes from defined application routes

    // setup express app here
    // ...
    app.use(bodyParser.json());

    const cors = require("cors");
    app.use(cors());
    app.use('/', routes)
    app.listen(SERVER_PORT)
// insert new users for test


    console.log(`Express server has started on port ${SERVER_PORT}. Open http://localhost:${SERVER_PORT} to see results`);

}).catch(error => console.log(error));
