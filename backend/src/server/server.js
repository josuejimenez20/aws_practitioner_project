const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
require('dotenv').config();
const { AWSPractitionerDBConnection } = require('../database/connectionDatabase');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.principalPath = "/api/v1"
        this.corsOptions = {
            origin: "http://localhost:5173",
            optionsSuccessStatus: 200
        }

        this.connectPosgresSQLAWSPractitioner();

        this.middlewares();

        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors(this.corsOptions));

        // Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static("public"));

        // FileUpload Carga de archivos
        this.app.use(
            fileUpload({
                useTempFiles: true,
                tempFileDir: "/tmp/",
            })
        );
    }

    routes() {
        this.app.use(this.principalPath, require("../routes/index.routes"));
    }

    async connectPosgresSQLAWSPractitioner() {
        try {
            await AWSPractitionerDBConnection();
        } catch (error) {
            throw new Error(error);
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Listening port:", this.port);
        });
    }
}

module.exports = Server;