const express = require("express");

const mysql = require("mysql");

const cors = require("cors");

const app = express(); // Create an instance of the express application

app.use(cors()); // Enable CORS policy for all routes

// Set up the connection to the MySQL database

const connection = mysql.createConnection({
  host: "localhost",

  user: "yourUsername", // Replace with your MySQL username

  password: "yourPassword", // Replace with your MySQL password

  database: "yourDatabase", // Replace with your database name
});

// Establish a connection to the database

connection.connect((err) => {
  if (err) throw err;

  console.log("Connected to the MySQL server."); // Confirmation message
});

// Define a route to retrieve data from the database

app.get("/api", (req, res) => {
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
  ];

  res.json(leasingAssets);
});

// Start the server on port 3000

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
