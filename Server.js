import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import zlib from 'zlib';
import bodyParser from 'body-parser';
import { generateAsciiTree } from './Endpoints/genTree.js';

const app = express();
app.use(cors());
app.use(compression({ level: zlib.constants.Z_DEFAULT_SPEED }));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 443;


app.post('/v1/tree', (req, res) => {
  const height = req.body.height;
  const width = req.body.width;
  try {
    const tree = generateAsciiTree(height, width);
    res.type('text/plain').send(tree);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start HTTP server (for Cloudflare Tunnel)
app.listen(PORT, () => {
  console.log(`HTTP Server läuft auf Port ${PORT}`);
});
