import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './Vertrag-Api';

@Component({
  selector: 'app-Vertrag',
  templateUrl: './Verträge.component.html',
  styleUrls: ['./Verträge.component.scss'],
})
export class VertragsComponent implements OnInit {
  leasingAssets: any[] = []; // Define an empty array to hold the fetched data

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.fetchData().subscribe(data => {
      // Handle the fetched data here
      this.leasingAssets = data;
    });
  }


  navigateToContract(assetId: number) {
    this.router.navigate(['/contracts', assetId]);
  }
}
