import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Assets',
  templateUrl: './Assets.component.html',
  styleUrls: ['./Assets.component.scss'],
})
export class AssetsComponent implements OnInit {
  leasingAssets = [
    {
      id: 1,
      standort: 'Berlin',
      leasingobjekt: 'Car',
      leasinggeber: 'Company A',
      leasingnehmer: 'John Doe',
    },
    {
      id: 2,
      standort: 'Munich',
      leasingobjekt: 'Office',
      leasinggeber: 'Company B',
      leasingnehmer: 'Jane Smith',
    },
    {
      id: 3,
      standort: 'Hamburg',
      leasingobjekt: 'Machinery',
      leasinggeber: 'Company C',
      leasingnehmer: 'Mike Johnson',
    },
    {
      id: 4,
      standort: 'Frankfurt',
      leasingobjekt: 'IT Equipment',
      leasinggeber: 'Company D',
      leasingnehmer: 'Emily Davis',
    },
    {
      id: 5,
      standort: 'Hamburg',
      leasingobjekt: 'Machinery',
      leasinggeber: 'Company C',
      leasingnehmer: 'Mike Johnson',
    },
    {
      id: 6,
      standort: 'Frankfurt',
      leasingobjekt: 'IT Equipment',
      leasinggeber: 'Company D',
      leasingnehmer: 'Emily Davis',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToContract(assetId: number) {this.router.navigate(['/contracts', assetId])}
}
