import fs from 'fs';
import Express from "express";
import BodyParser from "body-parser";
const path = require("path");

const app = Express();

const PORT = process.env.REACT_APP_SERVER_PORT || 8080;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use(Express.static(path.resolve(__dirname, "..", "build")));

app.use("/", (_, res) => {
    fs.readFile(path.resolve(__dirname, "..", "build", "index.html"), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({
                error: {
                    cause: JSON.stringify(err)
                }
            })
        }
        
        return res.send(data)
    })
})

const onServerStarted = () => {
    console.log(`Server is running on ::${PORT}`);
}

app.listen(PORT, onServerStarted)