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
      abschlussdatum: '31.12.2022',
      mietbeginn: '01.01.2020',
      endabrechnung: '68.01.2055',
      zinskonversion: '31.12.2022',
      laufzeit: '234 Monate',
      gesamtinvestition: '10000',
      abschlussgebuehr: '654',
    },
    {
      id: '2',
      assetId: '1',
      abschlussdatum: '31.12.2023',
      mietbeginn: '01.01.2021',
      endabrechnung: '68.01.2056',
      zinskonversion: '31.12.2023',
      laufzeit: '240 Monate',
      gesamtinvestition: '12000',
      abschlussgebuehr: '800',
    },
    {
      id: '3',
      assetId: '1',
      abschlussdatum: '31.12.2024',
      mietbeginn: '01.01.2022',
      endabrechnung: '68.01.2057',
      zinskonversion: '31.12.2024',
      laufzeit: '246 Monate',
      gesamtinvestition: '15000',
      abschlussgebuehr: '1000',
    },
  ],
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
    {
      id: '5',
      assetId: '2',
      abschlussdatum: '31.12.2023',
      mietbeginn: '01.01.2021',
      endabrechnung: '68.01.2056',
      zinskonversion: '31.12.2023',
      laufzeit: '240 Monate',
      gesamtinvestition: '12000',
      abschlussgebuehr: '800',
    },
    {
      id: '6',
      assetId: '2',
      abschlussdatum: '31.12.2024',
      mietbeginn: '01.01.2022',
      endabrechnung: '68.01.2057',
      zinskonversion: '31.12.2024',
      laufzeit: '246 Monate',
      gesamtinvestition: '15000',
      abschlussgebuehr: '1000',
    },
    {
      id: '7',
      assetId: '2',
      abschlussdatum: '31.12.2025',
      mietbeginn: '01.01.2023',
      endabrechnung: '68.01.2058',
      zinskonversion: '31.12.2025',
      laufzeit: '252 Monate',
      gesamtinvestition: '18000',
      abschlussgebuehr: '1200',
    },
  ],
  3: [
    /* {
      id: '8',
      assetId: '3',
      abschlussdatum: '31.12.2022',
      mietbeginn: '01.01.2020',
      endabrechnung: '68.01.2055',
      zinskonversion: '31.12.2022',
      laufzeit: '234 Monate',
      gesamtinvestition: '10000',
      abschlussgebuehr: '654',
    },
    {
      id: '78451.001',
      assetId: '3',
      abschlussdatum: '31.12.2023',
      mietbeginn: '01.01.2021',
      endabrechnung: '68.01.2056',
      zinskonversion: '31.12.2023',
      laufzeit: '240 Monate',
      gesamtinvestition: '12000',
      abschlussgebuehr: '800',
    }, */
  ],
  4: [
    {
      id: '8',
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
      id: '9',
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
      id: '10',
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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

// Route to get contract data for a specific asset
app.post('/get_unique_contract', (req, res) => {
  const contract_id = req.body.id; // Extract id from the request body

  console.log("Contract ID is " + contract_id);

  // Find the contract with the given ID
  let foundContract = null;
  let foundAsset = null;


  // Iterate over the values of the contracts object
  for (const contractsArray of Object.values(contracts)) {
    // Iterate over each contract object in the current contractsArray
    for (const contract of contractsArray) {
      if (contract.id === contract_id) {
        foundContract = contract;
        foundAsset = leasingAssets.find(asset => String(asset.id) === String(contract.assetId));
        console.log("Found contract and asset");
        console.log(foundContract);
        console.log(foundAsset);
        break;
      }
    }
  }
  if (foundContract && foundAsset) {
    const response = { contract: foundContract, asset: foundAsset };
    console.log("End response");
    console.log(response);
    res.json(response);
  } else {
    res.status(404).json({ error: 'Contract or asset not found' });
  }
});





// Route to get all assets
app.get("/get_assets", (req, res) => {
  console.log("Made connection to /assets (Server)");

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

const port = 3002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});