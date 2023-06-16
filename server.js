import  Express  from "express";

import config from "./src/db/config.js";
import cors from 'cors'
import eventRoutes from "./src/routes/eventRoutes.js";

import bodyParser from "body-parser";

const app = Express();

app.use(cors());
app.use(bodyParser.json());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));


eventRoutes(app);


app.get("/", (req, res) => {
    res.send("Hello World!🫠");
    });



app.listen(config.port, () => {
    console.log(`Server running at ${config.url} 🚀`);
});
