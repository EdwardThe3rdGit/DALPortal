// Contracts.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Contracts',
  templateUrl: './Contracts.component.html',
  styleUrls: ['./Contracts.component.scss'],
})
export class ContractsComponent implements OnInit {
  assetId: number | null = null;
  contract = {
    typ: 'Leasing',
    leasingobjektgesellschaft: 'Pandabuy',
    kundenId: '2',
    mietbeginn: '01.01.2020',
    laufzeit: '36 Monate',
    mietende: '31.12.2022',
    zahlungsrhytmus: 'Monatlich',
    gesamtinvestition: '10000€',
    lastschrifteinzug: 'Ja'
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.assetId = Number(params.get('id'));
      // Hier könnte man zusätzliche Logik hinzufügen, um die Vertragsdaten basierend auf der assetId zu laden
    });
  }
}
