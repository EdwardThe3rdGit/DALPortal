const express = require("express");

const mysql = require("mysql");

const cors = require("cors");

const app = express(); // Create an instance of the express application

app.use(cors()); // Enable CORS policy for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

// Set up the connection to the MySQL database

/* const connection = mysql.createConnection({
  host: "localhost",

  user: "yourUsername", // Replace with your MySQL username

  password: "yourPassword", // Replace with your MySQL password

  database: "yourDatabase", // Replace with your database name
});

// Establish a connection to the database

connection.connect((err) => {
  if (err) throw err;

  //console.log("Connected to the MySQL server."); // Confirmation message
});
 */
// Define a route to retrieve data from the database

app.post('/get_contract', (req, res) => {
  const { id } = req.body; // Extract id from the request body
  if (!id) {
    return res.status(400).json({ error: 'Contract ID is required' });
  }

  console.log("Contract ID is " + id);

  // Use contract ID, to get the contract details
  //const query = 'SELECT * FROM contracts WHERE id = ?'; // Adjust the query according to your table structure
  /* connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching contract data:', err);
      return res.status(500).json({ error: 'Failed to fetch contract data' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Contract not found' });
    }

    res.json(results[0]);
  }); */

  contract_example = {
    typ: 'Leasing',
    leasingobjektgesellschaft: 'Pandabuy',
    kundenId: '2',
    mietbeginn: '01.01.2020',
    laufzeit: '36 Monate',
    mietende: '31.12.2022',
    zahlungsrhytmus: 'Monatlich',
    gesamtinvestition: '10000€',
    lastschrifteinzug: 'Ja',
    assetId: id,

  };

  res.json(contract_example);
});


app.get("/get_assets", (req, res) => {
  console.log("Made connection to /assets (Server)");
  leasingAssets = [
    {
      id: 1,
      standort: 'Berlin',
      leasingobjekt: 'Car',
      leasinggeber: 'Company A',
      leasingnehmer: 'John Doe',
    },
    {
      id: 2,
      standort: 'Munich',
      leasingobjekt: 'Office',
      leasinggeber: 'Company B',
      leasingnehmer: 'Jane Smith',
    },
    {
      id: 3,
      standort: 'Hamburg',
      leasingobjekt: 'Machinery',
      leasinggeber: 'Company C',
      leasingnehmer: 'Mike Johnson',
    },
    {
      id: 4,
      standort: 'Frankfurt',
      leasingobjekt: 'IT Equipment',
      leasinggeber: 'Company D',
      leasingnehmer: 'Emily Davis',
    },
    {
      id: 5,
      standort: 'Hamburg',
      leasingobjekt: 'Machinery',
      leasinggeber: 'Company C',
      leasingnehmer: 'Mike Johnson',
    },
    {
      id: 6,
      standort: 'Frankfurt',
      leasingobjekt: 'IT Equipment',
      leasinggeber: 'Company D',
      leasingnehmer: 'Emily Davis',
    },
    {
      id: 8,
      standort: 'Hamburg',
      leasingobjekt: 'Machinery',
      leasinggeber: 'Company C',
      leasingnehmer: 'Mike Johnson',
    },
    {
      id: 7,
      standort: 'Frankfurt',
      leasingobjekt: 'IT Equipment',
      leasinggeber: 'Company D',
      leasingnehmer: 'Emily Davis',
    },
  ];

  res.json(leasingAssets);
});

// Start the server on port 3000

const port = 3002;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
