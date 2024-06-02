import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from './Contracts-Api';

@Component({
  selector: 'app-contract',
  templateUrl: './Contracts.component.html',
  styleUrls: ['./Contracts.component.scss'],
})
export class ContractComponent implements OnInit {
  contractId: string | null = null;
  contract: any = {}; // Dictionary for contract data
  asset: any = {}; // Dictionary for asset data

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.contractId = params.get('contract_id');
      console.log("ID: " + this.contractId);
      if (this.contractId) {
        this.dataService.getContractData(this.contractId).subscribe(data => {
          console.log("Got data,");
          console.log(data);
          this.contract = data.contract; // Assign contract data to contract dictionary
          this.asset = data.asset; // Assign asset data to asset dictionary
        }, error => {
          console.error('Error fetching contract data', error);
        });
      }
    });
  }
  
  navigateToMsges() {
    this.router.navigate(['/messages']);
  }
}
