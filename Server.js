import express from 'express';
import compression from 'compression';
import zlib from 'zlib';
import bodyParser from 'body-parser';
import { generateAsciiTree } from './Endpoints/genTree.js';

const app = express();
app.use(compression(); // default Kopression (Kompression macht nur ab bestimten größen wirklich sin aber ich will traffic spaaren ;)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 443; // für nicht Root Prozesse sudo setcap 'cap_net_bind_service=+ep' /usr/bin/node sonst können keine Ports unter 1024 genutzt werden!!!!!!!!!!!!!!!! 


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

