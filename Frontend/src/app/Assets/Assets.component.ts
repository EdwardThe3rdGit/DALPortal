import {Component, OnInit} from '@angular/core';
import { DataService } from './Assets-Api';

@Component({
  selector: 'app-Assets',
  templateUrl: './Assets.component.html',
  styleUrls: ['./Assets.component.scss'],
})

export class AssetsComponent implements OnInit {
  leasingAssets: any[] = []; // Define an empty array to hold the fetched data


  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log("Fetching assets");
    this.dataService.fetchData().subscribe(data => {
      // Handle the fetched data here
      console.log(data);
    });
  }
  
}
