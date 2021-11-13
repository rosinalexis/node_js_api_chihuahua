const express = require('express');
const app = express();
require('./models/dbConnection');
const PORT = 5500;
const chihuahuasRoutes = require('./routers/chihuahuasController');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/chihuahuas', chihuahuasRoutes);

app.listen(PORT, () => {
    console.log(`Le serveur écoute: http://localhost:${PORT}`);
});