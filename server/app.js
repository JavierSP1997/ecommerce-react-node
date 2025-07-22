const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());


const apiRoutes = require('./routes/api.routes');
app.use('/api', apiRoutes);

app.get('/api/ping', (req, res) => res.send('pong'));

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
