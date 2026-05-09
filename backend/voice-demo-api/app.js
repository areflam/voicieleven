// Premier fichier à lancer pour démarrer le serveur Express
// Seconde partie pour amener la route /api/voices qui va faire le lien avec la logique métier du controller.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/status', (req, res) => {
  res.json({
    status: 'Running',
    timestamp: new Date().toISOString()
  });
});

app.use('/api', require('./voices/routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

