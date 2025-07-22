// Données simulées réalistes
const mockTransactions = [
  // Compte Checking (x8349)
  {
    id: "1",
    accountId: "x8349",
    date: "2024-07-15",
    description: "Golden Sun Bakery",
    amount: -8.00,
    balance: 2074.79,
    category: "Food",
    note: "Morning coffee"
  },
  {
    id: "2",
    accountId: "x8349", 
    date: "2024-07-14",
    description: "Salary Deposit",
    amount: 3000.00,
    balance: 2082.79,
    category: "Income",
    note: ""
  },
  {
    id: "3",
    accountId: "x8349",
    date: "2024-07-13", 
    description: "Grocery Store",
    amount: -125.50,
    balance: -917.21,
    category: "Food",
    note: "Weekly shopping"
  },
  
  // Compte Savings (x6712)
  {
    id: "4",
    accountId: "x6712",
    date: "2024-07-12",
    description: "Interest Payment", 
    amount: 15.42,
    balance: 10928.42,
    category: "Income",
    note: "Monthly interest"
  },
  {
    id: "5",
    accountId: "x6712",
    date: "2024-07-10",
    description: "Transfer to Checking",
    amount: -500.00,
    balance: 10913.00,
    category: "Transfer", 
    note: ""
  },

  // Compte Credit Card (x8349_cc)
  {
    id: "6",
    accountId: "x8349_cc",
    date: "2024-07-16",
    description: "Online Purchase",
    amount: 67.30,
    balance: 184.30,
    category: "Shopping",
    note: "Amazon order"
  },
  {
    id: "7", 
    accountId: "x8349_cc",
    date: "2024-07-11",
    description: "Payment Received",
    amount: -200.00,
    balance: 117.00,
    category: "Payment",
    note: "Monthly payment"
  }
];

module.exports = {
  getAllTransactions: (req, res) => {
    try {
      // Filtrer les transactions du mois en cours (simulation)
      const currentMonthTransactions = mockTransactions;
      
      res.status(200).json({
        status: 200,
        message: "Transactions retrieved successfully",
        body: currentMonthTransactions
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        body: null
      });
    }
  },

  getTransactionById: (req, res) => {
    try {
      const { transactionId } = req.params;
      
      const transaction = mockTransactions.find(t => t.id === transactionId);
      
      if (!transaction) {
        return res.status(404).json({
          status: 404,
          message: "Transaction not found",
          body: null
        });
      }

      res.status(200).json({
        status: 200,
        message: "Transaction retrieved successfully", 
        body: transaction
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        body: null
      });
    }
  },

  updateTransactionById: (req, res) => {
    try {
      const { transactionId } = req.params;
      const { category, note } = req.body;

      const transaction = mockTransactions.find(t => t.id === transactionId);
      
      if (!transaction) {
        return res.status(404).json({
          status: 404,
          message: "Transaction not found",
          body: null
        });
      }

      // Mise à jour des champs modifiables uniquement
      if (category !== undefined) transaction.category = category;
      if (note !== undefined) transaction.note = note;

      res.status(200).json({
        status: 200,
        message: "Transaction updated successfully",
        body: transaction
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Internal Server Error", 
        body: null
      });
    }
  },
};