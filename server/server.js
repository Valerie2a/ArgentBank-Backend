const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const path = require('path')
const swaggerDocs = yaml.load(path.resolve(__dirname, '../swagger.yaml'))
const dbConnection = require('./database/connection')

dotEnv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Connexion à la base de données
dbConnection()

// Gestion des problèmes CORS
app.use(cors())

// Middleware pour traiter les données des requêtes
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Gestion des routes personnalisées
app.use('/api/v1/user', require('./routes/userRoutes'))
app.use('/api/v1/transactions', require('./routes/transactionRoutes'))

// Documentation de l'API
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

// Route racine
app.get('/', (req, res, next) => {
  res.send('Hello from my Express server v2!')
})

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})