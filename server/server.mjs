import './loadEnvironment.mjs';
import express from 'express';
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';
import databaseObject from "./db/connection.mjs";

import testimonialRouter from "./routes/testimonials.mjs";
import mailRouter from "./routes/sendMail.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app  = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/testimonials", testimonialRouter);
app.use("/api/sendMail", mailRouter);

// Any other GET requests not handled by Express itself will return our React app
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../client/build", 'index.html'));
});

app.listen(PORT, () => {
    // Test cosmic_closet db connection
    databaseObject.connectToServer();

    console.log(`Cosmic Closet listening at http://localhost:${PORT}`);
});
