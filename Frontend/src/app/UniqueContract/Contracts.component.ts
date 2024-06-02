import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './Contracts-Api';

@Component({
  selector: 'app-contract',
  templateUrl: './Contracts.component.html',
  styleUrls: ['./Contracts.component.scss'],
})
export class ContractComponent implements OnInit {
  contractId: string | null = null;
  contracts: any[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.contractId = params.get('contract_id');
      console.log("ID: " + this.contractId);
      if (this.contractId) {
        this.dataService.getContractData(this.contractId).subscribe(data => {
          console.log(data);
          this.contracts = data[0]; // Assuming the response is an array of contracts
        }, error => {
          console.error('Error fetching contract data', error);
        });
      }
    });
  }
}
