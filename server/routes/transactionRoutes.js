const express = require("express");
const router = express.Router();

const { validateToken } = require("../middleware/tokenValidation");


// Contrôleurs
const {
  getAllTransactions,
  getTransactionById,
  updateTransactionById
} = require("../controllers/transactionController.js");

// GET /transactions - Obtenir toutes les transactions du mois
router.get("/", validateToken , getAllTransactions);

// GET /transactions/:transactionId - Détails d’une transaction
router.get("/:transactionId", validateToken, getTransactionById);

// PUT /transactions/:transactionId - Modifier une transaction
router.put("/:transactionId", validateToken, updateTransactionById);

module.exports = router;
