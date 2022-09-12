import express, {Express, Response, Request} from "express";
import "./db";
import product from "./routes/products.routes";
import user from "./routes/users.routes";
const config = require("config");
//initialization
const app:Express = express();

//setting
app.set("port", process.env.PORT || config.app.server.port);

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/product", product);
app.use("/user", user);

app.listen(app.get("port"), () => {
    console.log(`server on port ${app.get("port")}`);
})