import Express from "express";
import BodyParser from "body-parser";
const path = require("path");

const app = Express();

const PORT = process.env.REACT_APP_SERVER_PORT || 8080;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use(Express.static(path.resolve(__dirname, "..", "build")));

const onServerStarted = () => {
    console.log(`Server is running on ::${PORT}`);
}

app.listen(PORT, onServerStarted)