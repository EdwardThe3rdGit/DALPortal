// Contracts.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './Contracts-Api';

@Component({
  selector: 'app-Contracts',
  templateUrl: './Contracts.component.html',
  styleUrls: ['./Contracts.component.scss'],
})
export class ContractsComponent implements OnInit {
  assetId: number | null = null;
  contract: Contract = {
    typ: 'Test Typ',
    leasingobjektgesellschaft: 'XYZ Leasing',
    kundenId: '123456',
    mietbeginn: '2024-01-01',
    laufzeit: '36 months',
    mietende: '2027-01-01',
    zahlungsrhytmus: 'Monthly',
    gesamtinvestition: '50000 EUR',
    lastschrifteinzug: 'Yes',
    assetId: 7890
  };
  

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.assetId = Number(params.get('id'));

      console.log(this.assetId);

      if (this.assetId) {
        this.dataService.getContractData(this.assetId).subscribe(data => {
          this.contract = data;
        }, error => {
          console.error('Error fetching contract data', error);
        });
      }
    });
  }
}


// Definition von Contract Dict
// src/app/contracts/contract.model.ts
export interface Contract {
  typ: string;
  leasingobjektgesellschaft: string;
  kundenId: string;
  mietbeginn: string;
  laufzeit: string;
  mietende: string;
  zahlungsrhytmus: string;
  gesamtinvestition: string;
  lastschrifteinzug: string;
  assetId: number;  // Assuming assetId is a number
}
