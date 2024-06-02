import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './Assets-Api';

@Component({
  selector: 'app-Assets',
  templateUrl: './Assets.component.html',
  styleUrls: ['./Assets.component.scss'],
})
export class AssetsComponent implements OnInit {
  leasingAssets: any[] = []; // Define an empty array to hold the fetched data

  constructor(private dataService: DataService, private router: Router, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.dataService.fetchData().subscribe(data => {
      // Handle the fetched data here
      console.log(data);
      console.log(data.vertraege);
      this.leasingAssets = data;

      
    });
  }

  toggleCollapse(id: number) {
    const collapse = document.getElementById(`collapse${id}`);
    if (collapse) {
      if (collapse.classList.contains('show')) {
        collapse.classList.remove('show');
      } else {
        collapse.classList.add('show');
      }
    }
  }

  navigateToContract(assetId: number) {
    this.router.navigate(['/contracts', assetId]);
  }
  navigateToMsges() {
    this.router.navigate(['/messages']);
  }
}
