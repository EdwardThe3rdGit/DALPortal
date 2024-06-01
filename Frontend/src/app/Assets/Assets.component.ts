import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './Assets-Api';

@Component({
  selector: 'app-Assets',
  templateUrl: './Assets.component.html',
  styleUrls: ['./Assets.component.scss'],
})
export class AssetsComponent implements OnInit {
  leasingAssets: any[] = []; // Define an empty array to hold the fetched data

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.fetchData().subscribe(data => {
      // Handle the fetched data here
      console.log(data);
      this.leasingAssets = data;
    });
  }

  navigateToContract(assetId: number) {
    this.router.navigate(['/contracts', assetId]);
  }
}
