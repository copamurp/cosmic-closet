import express from 'express';
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';

const PORT = 3005;
const app = express();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Any other GET requests not handled by Express itself will return our React app
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.static("public"));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
