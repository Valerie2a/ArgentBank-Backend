// server.js
const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const path = require('path');
const dbConnection = require('./database/connection');

dotEnv.config();

const swaggerDocs = yaml.load(path.resolve(__dirname, '../swagger.yaml'));
const app = express();

// ----- Port (hébergeur fournit souvent process.env.PORT) -----
const PORT = process.env.PORT || 3001;

// ----- DB -----
dbConnection();

// ----- CORS (temporairement permissif pour tests) -----
app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Réponse aux préflights
app.options('*', cors());

// ----- Middlewares parsing -----
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ----- Routes API -----
app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/transactions', require('./routes/transactionRoutes'));

// ----- Docs (désactivées en prod) -----
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

// ----- Healthcheck -----
app.get('/healthz', (req, res) => res.send('ok'));

// ----- Racine -----
app.get('/', (req, res) => {
  res.send('Hello from my Express server v2!');
});

// ----- Lancement serveur (toutes interfaces) -----
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});