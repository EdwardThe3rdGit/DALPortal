const express = require("express");
const cors = require("cors");

const app = express(); // Create an instance of the express application

app.use(cors()); // Enable CORS policy for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

// Dummy data for contracts
const contracts = {
  1: [
    {
      id: '1',
      assetId: '1',
      abschlussdatum: '31.12.2022',
      mietbeginn: '01.01.2020',
      endabrechnung: '68.01.2055',
      zinskonversion: '31.12.2022',
      laufzeit: '234 Monate',
      gesamtinvestition: '10000',
      abschlussgebuehr: '654',
    },
    // Weitere Verträge für Asset 1
    {
      id: '2',
      assetId: '1',
      abschlussdatum: '31.12.2022',
      mietbeginn: '01.01.2020',
      endabrechnung: '68.01.2055',
      zinskonversion: '31.12.2022',
      laufzeit: '234 Monate',
      gesamtinvestition: '10000',
      abschlussgebuehr: '654',
    },
  ],
  
  // Weitere Asset-IDs und ihre Verträge

  2: [
    {
      id: '4',
      assetId: '2',
      abschlussdatum: '31.12.2022',
      mietbeginn: '01.01.2020',
      endabrechnung: '68.01.2055',
      zinskonversion: '31.12.2022',
      laufzeit: '234 Monate',
      gesamtinvestition: '10000',
      abschlussgebuehr: '654',
    },
    // Weitere Verträge für Asset 1
    {
      id: '3',
      assetId: '2',
      abschlussdatum: '31.12.2022',
      mietbeginn: '01.01.2020',
      endabrechnung: '68.01.2055',
      zinskonversion: '31.12.2022',
      laufzeit: '234 Monate',
      gesamtinvestition: '10000',
      abschlussgebuehr: '654',
    },
  ],
};

// Route to get contract data for a specific asset
app.post('/get_contract', (req, res) => {
  const { id } = req.body; // Extract id from the request body
  if (!id) {
    return res.status(400).json({ error: 'Contract ID is required' });
  }

  console.log("Contract ID is " + id);

  const assetContracts = contracts[id];
  if (assetContracts) {
    res.json(assetContracts);
  } else {
    res.status(404).json({ error: 'Contracts not found' });
  }
});

// Route to get all assets
app.get("/get_assets", (req, res) => {
  console.log("Made connection to /assets (Server)");
  const leasingAssets = [
    {
      id: 1,
      standort: 'Berlin',
      leasingobjekt: 'Car',
      leasinggeber: 'Company A',
      leasingnehmer: 'John Doe',
    },
    {
      id: 2,
      standort: 'Berlin',
      leasingobjekt: 'Car',
      leasinggeber: 'Company A',
      leasingnehmer: 'John Doe',
    },
    // More assets
  ];

  res.json(leasingAssets);
});

// Start the server on port 3002
const port = 3002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
