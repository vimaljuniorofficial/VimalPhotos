import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const staticDir = path.join(__dirname, 'public');

app.use(express.static(staticDir));
app.use('/VIMAL Photos', express.static(path.join(__dirname, 'VIMAL Photos')));

// SPA route fallback (supports /admin and client routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
