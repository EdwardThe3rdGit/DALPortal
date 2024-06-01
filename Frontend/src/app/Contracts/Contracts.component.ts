import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './contracts-api';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
})
export class ContractsComponent implements OnInit {
  contractId: string | null = null;
  contracts: any[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.contractId = params.get('id');
      if (this.contractId) {
        this.dataService.getContractData(this.contractId).subscribe(data => {
          this.contracts = data; // Assuming the response is an array of contracts
        }, error => {
          console.error('Error fetching contract data', error);
        });
      }
    });
  }
}
