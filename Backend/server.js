const express = require("express");
const cors = require("cors");

const app = express(); // Create an instance of the express application

app.use(cors()); // Enable CORS policy for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

// Dummy data for contracts
// Dummy data for contracts
const contracts = {
  1: [
    {
      id: '1',
      assetId: '1',
      abschlussdatum: '31.12.2022',
      mietbeginn: '01.01.2020',
      endabrechnung: '28.01.2055',
      zinskonversion: '31.12.2022',
      laufzeit: '234 Monate',
      gesamtinvestition: '10000',
      abschlussgebuehr: '654',
      rechnungen : 
      [
          {
            rechnungsnummer : '45871',
            rechnungsdatum : '02.01.2024',
            betrag: '1910.60',
            status: 'offen',
            vertrag_ID : 1,
          },
          {
            rechnungsnummer : '98652',
            rechnungsdatum : '12.02.2024',
            betrag: '73.90',
            status: 'beglichen',
            vertrag_ID : 1,
          },
          {
            rechnungsnummer : '89124',
            rechnungsdatum : '14.02.2024',
            betrag: '50.40',
            status: 'beglichen',
            vertrag_ID : 1,
          }
        ]
    },
    {
      id: '2',
      assetId: '1',
      abschlussdatum: '31.12.2023',
      mietbeginn: '01.01.2021',
      endabrechnung: '28.01.2056',
      zinskonversion: '31.12.2023',
      laufzeit: '240 Monate',
      gesamtinvestition: '12000',
      abschlussgebuehr: '800',
      rechnungen: [
        {
          rechnungsnummer : '45812',
          rechnungsdatum : '01.03.2024',
          betrag: '214438.00',
          status: 'offen',
          vertrag_ID : 2,
        }
      ]
    },
    {
      id: '3',
      assetId: '1',
      abschlussdatum: '31.12.2024',
      mietbeginn: '01.01.2022',
      endabrechnung: '28.01.2057',
      zinskonversion: '31.12.2024',
      laufzeit: '246 Monate',
      gesamtinvestition: '15000',
      abschlussgebuehr: '1000',
      rechnungen: [
        {
          rechnungsnummer : '94283',
          rechnungsdatum : '01.03.2024',
          betrag: '190638.00',
          status: 'offen',
          vertrag_ID : 3,
        }
      ]
    },
  ],
  2: [
    {
      id: '4',
      assetId: '2',
      abschlussdatum: '31.12.2022',
      mietbeginn: '01.01.2020',
      endabrechnung: '28.01.2055',
      zinskonversion: '31.12.2022',
      laufzeit: '234 Monate',
      gesamtinvestition: '10000',
      abschlussgebuehr: '654',
      rechnungen: [
        {
          rechnungsnummer : '77412',
          rechnungsdatum : '01.06.2024',
          betrag: '192185.00',
          status: 'offen',
          vertrag_ID : 4,
        },
        {
          rechnungsnummer : '66842',
          rechnungsdatum : '01.03.2024',
          betrag: '12495.00',
          status: 'offen',
          vertrag_ID : 4,
        }
      ]
    },
    {
      id: '5',
      assetId: '2',
      abschlussdatum: '31.12.2023',
      mietbeginn: '01.01.2021',
      endabrechnung: '28.01.2056',
      zinskonversion: '31.12.2023',
      laufzeit: '240 Monate',
      gesamtinvestition: '12000',
      abschlussgebuehr: '800',
      rechnungen: [
        {
          rechnungsnummer : '22661',
          rechnungsdatum : '01.03.2024',
          betrag: '1785.00',
          status: 'offen',
          vertrag_ID : 5,
        },
      ]
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
    {
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
      id: '9',
      assetId: '3',
      abschlussdatum: '31.12.2023',
      mietbeginn: '01.01.2021',
      endabrechnung: '68.01.2056',
      zinskonversion: '31.12.2023',
      laufzeit: '240 Monate',
      gesamtinvestition: '12000',
      abschlussgebuehr: '800',
    },
  ],
  4: [
    {
      id: '10',
      assetId: '4',
      abschlussdatum: '31.12.2022',
      mietbeginn: '01.01.2020',
      endabrechnung: '68.01.2055',
      zinskonversion: '31.12.2022',
      laufzeit: '234 Monate',
      gesamtinvestition: '10000',
      abschlussgebuehr: '654',
    },
    {
      id: '11',
      assetId: '4',
      abschlussdatum: '31.12.2023',
      mietbeginn: '01.01.2021',
      endabrechnung: '68.01.2056',
      zinskonversion: '31.12.2023',
      laufzeit: '240 Monate',
      gesamtinvestition: '12000',
      abschlussgebuehr: '800',
    },
    {
      id: '12',
      assetId: '4',
      abschlussdatum: '31.12.2024',
      mietbeginn: '01.01.2022',
      endabrechnung: '68.01.2057',
      zinskonversion: '31.12.2024',
      laufzeit: '246 Monate',
      gesamtinvestition: '15000',
      abschlussgebuehr: '1000',
    },
    {
      id: '13',
      assetId: '4',
      abschlussdatum: '31.12.2025',
      mietbeginn: '01.01.2023',
      endabrechnung: '68.01.2058',
      zinskonversion: '31.12.2025',
      laufzeit: '252 Monate',
      gesamtinvestition: '18000',
      abschlussgebuehr: '1200',
    },
  ],
  5: [
    {
      id: '14',
      assetId: '5',
      abschlussdatum: '31.12.2022',
      mietbeginn: '01.01.2020',
      endabrechnung: '68.01.2055',
      zinskonversion: '31.12.2022',
      laufzeit: '234 Monate',
      gesamtinvestition: '10000',
      abschlussgebuehr: '654',
    },
    {
      id: '15',
      assetId: '5',
      abschlussdatum: '31.12.2023',
      mietbeginn: '01.01.2021',
      endabrechnung: '68.01.2056',
      zinskonversion: '31.12.2023',
      laufzeit: '240 Monate',
      gesamtinvestition: '12000',
      abschlussgebuehr: '800',
    },
    {
      id: '16',
      assetId: '5',
      abschlussdatum: '31.12.2024',
      mietbeginn: '01.01.2022',
      endabrechnung: '68.01.2057',
      zinskonversion: '31.12.2024',
      laufzeit: '246 Monate',
      gesamtinvestition: '15000',
      abschlussgebuehr: '1000',
    },
  ],

  // Contracts for Asset ID 6
  6: [
    {
      id: '17',
      assetId: '6',
      abschlussdatum: '31.12.2022',
      mietbeginn: '01.01.2020',
      endabrechnung: '68.01.2055',
      zinskonversion: '31.12.2022',
      laufzeit: '234 Monate',
      gesamtinvestition: '10000',
      abschlussgebuehr: '654',
    },
    {
      id: '18',
      assetId: '6',
      abschlussdatum: '31.12.2023',
      mietbeginn: '01.01.2021',
      endabrechnung: '68.01.2056',
      zinskonversion: '31.12.2023',
      laufzeit: '240 Monate',
      gesamtinvestition: '12000',
      abschlussgebuehr: '800',
    },
  ],

  // Contracts for Asset ID 7
  7: [
    {
      id: '19',
      assetId: '7',
      abschlussdatum: '31.12.2022',
      mietbeginn: '01.01.2020',
      endabrechnung: '68.01.2055',
      zinskonversion: '31.12.2022',
      laufzeit: '234 Monate',
      gesamtinvestition: '10000',
      abschlussgebuehr: '654',
    },
    {
      id: '20',
      assetId: '7',
      abschlussdatum: '31.12.2023',
      mietbeginn: '01.01.2021',
      endabrechnung: '68.01.2056',
      zinskonversion: '31.12.2023',
      laufzeit: '240 Monate',
      gesamtinvestition: '12000',
      abschlussgebuehr: '800',
    },
    {
      id: '21',
      assetId: '7',
      abschlussdatum: '31.12.2024',
      mietbeginn: '01.01.2022',
      endabrechnung: '68.01.2057',
      zinskonversion: '31.12.2024',
      laufzeit: '246 Monate',
      gesamtinvestition: '15000',
      abschlussgebuehr: '1000',
    },
    {
      id: '22',
      assetId: '7',
      abschlussdatum: '31.12.2025',
      mietbeginn: '01.01.2023',
      endabrechnung: '68.01.2058',
      zinskonversion: '31.12.2025',
      laufzeit: '252 Monate',
      gesamtinvestition: '18000',
      abschlussgebuehr: '1200',
    },
  ],

  // Contracts for Asset ID 8
  8: [
    {
      id: '23',
      assetId: '8',
      abschlussdatum: '31.12.2022',
      mietbeginn: '01.01.2020',
      endabrechnung: '68.01.2055',
      zinskonversion: '31.12.2022',
      laufzeit: '234 Monate',
      gesamtinvestition: '10000',
      abschlussgebuehr: '654',
    },
    {
      id: '24',
      assetId: '8',
      abschlussdatum: '31.12.2023',
      mietbeginn: '01.01.2021',
      endabrechnung: '68.01.2056',
      zinskonversion: '31.12.2023',
      laufzeit: '240 Monate',
      gesamtinvestition: '12000',
      abschlussgebuehr: '800',
    },
    {
      id: '25',
      assetId: '8',
      abschlussdatum: '31.12.2024',
      mietbeginn: '01.01.2022',
      endabrechnung: '68.01.2057',
      zinskonversion: '31.12.2024',
      laufzeit: '246 Monate',
      gesamtinvestition: '15000',
      abschlussgebuehr: '1000',
    },
    {
      id: '26',
      assetId: '8',
      abschlussdatum: '31.12.2025',
      mietbeginn: '01.01.2023',
      endabrechnung: '68.01.2058',
      zinskonversion: '31.12.2025',
      laufzeit: '252 Monate',
      gesamtinvestition: '15000',
      abschlussgebuehr: '1000',
    },
  ],
  9: [
    {
      id: '23',
      assetId: '8',
      abschlussdatum: '31.12.2022',
      mietbeginn: '01.01.2020',
      endabrechnung: '68.01.2055',
      zinskonversion: '31.12.2022',
      laufzeit: '234 Monate',
      gesamtinvestition: '10000',
      abschlussgebuehr: '654',
    },
    {
      id: '24',
      assetId: '8',
      abschlussdatum: '31.12.2023',
      mietbeginn: '01.01.2021',
      endabrechnung: '68.01.2056',
      zinskonversion: '31.12.2023',
      laufzeit: '240 Monate',
      gesamtinvestition: '12000',
      abschlussgebuehr: '800',
    },
    {
      id: '25',
      assetId: '8',
      abschlussdatum: '31.12.2024',
      mietbeginn: '01.01.2022',
      endabrechnung: '68.01.2057',
      zinskonversion: '31.12.2024',
      laufzeit: '246 Monate',
      gesamtinvestition: '15000',
      abschlussgebuehr: '1000',
    },
    {
      id: '26',
      assetId: '8',
      abschlussdatum: '31.12.2025',
      mietbeginn: '01.01.2023',
      endabrechnung: '68.01.2058',
      zinskonversion: '31.12.2025',
      laufzeit: '252 Monate',
      gesamtinvestition: '15000',
      abschlussgebuehr: '1000',
    },
  ],
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
      id: 5472,
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

const port = 3002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});