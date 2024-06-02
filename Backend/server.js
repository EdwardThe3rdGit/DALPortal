const express = require("express");
const cors = require("cors");

const app = express(); // Create an instance of the express application

app.use(cors()); // Enable CORS policy for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

// Dummy data for contracts

const contracts = {
  1: [
    {
      id: '54721.001', 
      assetId: '1',
      typ: 'TA',
      leasingobjektgesellschaft: 'Fatina GVG',
      kundeId: '25412',
      mietbeginn: '2016-06-01',
      laufzeit: '180 Monate',
      mietende: '2031-05-31',
      zahlungsrhythmus: 'monatlich',
      zahlungsweise: 'vorschüssig',
      gesamtinvestitionskosten: '32650000.00',
      lastschrifteinzug: 'Ja'
    }
  ],
  2: [
    {
      id: '61601.001',
      assetId: '2',
      typ: 'TA',
      leasingobjektgesellschaft: 'Fatina GVG',
      kundeId: '25412',
      mietbeginn: '2017-01-01',
      laufzeit: '174 Monate',
      mietende: '2031-06-30',
      zahlungsrhythmus: 'monatlich',
      zahlungsweise: 'vorschüssig',
      gesamtinvestitionskosten: '22750000.00',
      lastschrifteinzug: 'Nein'
    }
  ],
  3: [
    {
      id: '78451.001',
      assetId: '3',
      typ: 'TA',
      leasingobjektgesellschaft: 'Fatina GVG',
      kundeId: '25412',
      mietbeginn: '2020-01-01',
      laufzeit: '138 Monate',
      mietende: '2031-06-30',
      zahlungsrhythmus: 'monatlich',
      zahlungsweise: 'vorschüssig',
      gesamtinvestitionskosten: '5000000.00',
      lastschrifteinzug: 'Nein'
    }
  ],
  4: [
    {
      id: '90171.001',
      assetId: '4',
      typ: 'VA',
      leasingobjektgesellschaft: 'Fatina GVG',
      kundeId: '25412',
      mietbeginn: '2022-08-01',
      laufzeit: '192 Monate',
      mietende: '2038-07-31',
      zahlungsrhythmus: 'monatlich',
      zahlungsweise: 'nachschüssig',
      gesamtinvestitionskosten: '17250000.00',
      lastschrifteinzug: 'Nein'
    }
  ],
  5: [
    {
      id: '85411.001',
      assetId: '5',
      typ: 'VA',
      leasingobjektgesellschaft: 'Fatina GVG',
      kundeId: '25412',
      mietbeginn: '2022-08-01',
      laufzeit: '192 Monate',
      mietende: '2038-07-31',
      zahlungsrhythmus: 'monatlich',
      zahlungsweise: 'nachschüssig',
      gesamtinvestitionskosten: '17250000.00',
      lastschrifteinzug: 'Nein',
    },
    
  ],
  6: [
    {
      id: '55091.001',
      assetId: '6',
      typ: 'VA',
      leasingobjektgesellschaft: 'Fatina GVG',
      kundeId: '25412',
      mietbeginn: '2023-05-01',
      laufzeit: '183 Monate',
      mietende: '2038-07-31',
      zahlungsrhythmus: 'monatlich',
      zahlungsweise: 'nachschüssig',
      gesamtinvestitionskosten: '8900000.00',
      lastschrifteinzug: 'Ja'
    }
  ]
};


// Function to get contract data for a specific asset
function getContract(id) {
  const assetContracts = contracts[id];
  if (assetContracts) {
    return assetContracts;
  } else {
    throw new Error('Contracts not found');
  }
}

// Route to get contract data for a specific asset
app.post('/get_contract', (req, res) => {
  const { id } = req.body; // Extract id from the request body
  if (!id) {
    return res.status(400).json({ error: 'Asset ID is required' });
  }

  console.log("Asset ID is " + id);

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
      objektartBezeichnung: 'Parkhaus',
      strasse: 'Froschgasse 93',
      plz: '58912',
      ort: 'Bierstadt',
      zustand: 'Neubau',
      objekterrichtung: 'Sale and lease back',
      grundstuecksart: 'Kauf',
      untermieter: 'Nein',
      imageUrl: 'https://media.gettyimages.com/id/128502214/de/foto/classic-turn-of-the-century-american-house.jpg?s=612x612&w=gi&k=20&c=d4GVWJ7ehp10xUREyj0787VvZ1Aedxts9ZNSMiuL0_Y=',
      vertraege: getContract(1),
    },
    {
      id: 6160,
      objektartBezeichnung: 'Lagerhalle',
      strasse: 'Weingasse 11',
      plz: '58911',
      ort: 'Hasstadt',
      zustand: 'Neubau',
      objekterrichtung: 'Projektmanagement',
      grundstuecksart: 'Erbbaurecht',
      untermieter: 'Nein',
      imageUrl: 'https://www.wilsonhomes.com.au/sites/default/files/styles/blog_hero_banner/public/My%20project%20-%202023-06-20T095818.329%20%281%29_0.jpg?itok=UbtVbhT0',
      vertraege: getContract(2),
    },
    {
      id: 7845,
      objektartBezeichnung: 'Lagerhalle',
      strasse: 'Froschgasse 78',
      plz: '58912',
      ort: 'Bierstadt',
      zustand: 'Neubau',
      objekterrichtung: 'Sale and lease back',
      grundstuecksart: 'Kauf',
      untermieter: 'Ja',
      imageUrl: 'https://cdna.artstation.com/p/assets/images/images/045/535/208/large/eugene-caubel-haussmann-concept.jpg?1642963048',
      vertraege: getContract(3),
    },
    {
      id: 9017,
      objektartBezeichnung: 'Lagerhalle',
      strasse: 'Weingasse 11',
      plz: '58911',
      ort: 'Hasstadt',
      zustand: 'Neubau',
      objekterrichtung: 'Projektmanagement',
      grundstuecksart: 'Erbbaurecht',
      untermieter: 'Nein',
      imageUrl: 'https://butterflymx.com/wp-content/uploads/2022/07/asset-management-vs-property-management.jpg',
      vertraege: getContract(4),
    },
    {
      id: 8542,
      objektartBezeichnung: 'Produktionsgebäude',
      strasse: 'Froschgasse 85',
      plz: '58912',
      ort: 'Bierstadt',
      zustand: 'Neubau',
      objekterrichtung: 'Sale and lease back',
      grundstuecksart: 'Kauf',
      untermieter: 'Ja',
      imageUrl: 'https://d1y8sb8igg2f8e.cloudfront.net/images/Hey_Congress_No_Time_to_Leave_the_Dance_Floor_.width-600.jpg',
      vertraege: getContract(5),
    },
    {
      id: 5509,
      objektartBezeichnung: 'Sondergebäude',
      strasse: 'Weingasse 13',
      plz: '58911',
      ort: 'Hasstadt',
      zustand: 'Neubau',
      objekterrichtung: 'Projektmanagement',
      grundstuecksart: 'Erbbaurecht',
      untermieter: 'Nein',
      imageUrl: 'https://media.gettyimages.com/id/128502214/de/foto/classic-turn-of-the-century-american-house.jpg?s=612x612&w=gi&k=20&c=d4GVWJ7ehp10xUREyj0787VvZ1Aedxts9ZNSMiuL0_Y=',
      vertraege: getContract(6),
    },
  ];

  res.json(leasingAssets);
});


app.get("/get_msges", (req, res) => {
  console.log("Made connection to /get_msges (Server)");
  const msges = [
    {
      Betreff: "Neues Datenschutz Gesetz",
      Sender: "DAL@gmail.com",
      Vorschau: "Wir haben ein neues...",
      Message: "Sehr geehrte Damen und Herren, \n\nwir möchten Sie darüber informieren, dass ein neues Datenschutzgesetz in Kraft getreten ist. Bitte lesen Sie die angehängten Dokumente für weitere Informationen.\n\nMit freundlichen Grüßen,\nIhr Datenschutz-Team"
    },
    {
      Betreff: "Wichtige Informationen zur Wartung",
      Sender: "service@webmail.com",
      Vorschau: "Am kommenden Wochenende werden...",
      Message: "Liebe Kunden, \n\nbitte beachten Sie, dass am kommenden Wochenende Wartungsarbeiten an unseren Servern durchgeführt werden. In dieser Zeit wird es zu Unterbrechungen im Service kommen. Wir entschuldigen uns für die Unannehmlichkeiten.\n\nBeste Grüße,\nIhr Webmail Service-Team"
    },
    {
      Betreff: "Einladung zum Meeting",
      Sender: "hr@unternehmen.de",
      Vorschau: "Bitte bestätigen Sie Ihre Teilnahme an...",
      Message: "Hallo, \n\nwir laden Sie herzlich zu unserem jährlichen Mitarbeiter-Meeting ein. Das Meeting findet am 15. Juni um 10:00 Uhr im Konferenzraum A statt. Bitte bestätigen Sie Ihre Teilnahme bis zum 10. Juni.\n\nVielen Dank,\nIhr HR-Team"
    },
    {
      Betreff: "Wichtige Informationen zur Wartung",
      Sender: "service@webmail.com",
      Vorschau: "Am kommenden Wochenende werden...",
      Message: "Liebe Kunden, \n\nbitte beachten Sie, dass am kommenden Wochenende Wartungsarbeiten an unseren Servern durchgeführt werden. In dieser Zeit wird es zu Unterbrechungen im Service kommen. Wir entschuldigen uns für die Unannehmlichkeiten.\n\nBeste Grüße,\nIhr Webmail Service-Team"
    },
    {
      Betreff: "Einladung zum Meeting",
      Sender: "hr@unternehmen.de",
      Vorschau: "Bitte bestätigen Sie Ihre Teilnahme an...",
      Message: "Hallo, \n\nwir laden Sie herzlich zu unserem jährlichen Mitarbeiter-Meeting ein. Das Meeting findet am 15. Juni um 10:00 Uhr im Konferenzraum A statt. Bitte bestätigen Sie Ihre Teilnahme bis zum 10. Juni.\n\nVielen Dank,\nIhr HR-Team"
    }
];



  res.json(msges);
});


app.get("/get_verträge", (req, res) => {
  console.log("Made connection to /get_verträge (Server)");
  const verträge = [
    // sind gerade auch nur assets, hier müssen noch Verträge als Examplare hinzugefügt werden
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

  res.json(verträge);
});

// Start the server on port 3002
const port = 3002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
