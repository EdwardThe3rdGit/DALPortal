import { Component, OnInit } from '@angular/core';
import { DataService } from './contracts-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
})
export class ContractsComponent implements OnInit {
  contracts: any[] = [];

  constructor(private dataService: DataService, private router: Router ) {}

  ngOnInit() {
    // Entferne die Überprüfung auf this.contractId, da wir alle Verträge anzeigen möchten
    this.dataService.fetchAssets().subscribe(data => {
      // Hier setzen wir this.contracts auf die empfangenen Daten, da fetchAssets() alle Verträge holt
      this.contracts = data;
    }, error => {
      console.error('Error fetching contract data', error);
    });
  }

  loadAllContracts() {
    this.dataService.fetchContracts().subscribe(data => {
      this.contracts = data;
    }, error => {
      console.error('Error fetching contracts', error);
    });
  }

  navigateToMsges() {
    this.router.navigate(['/messages']);
  }
}
