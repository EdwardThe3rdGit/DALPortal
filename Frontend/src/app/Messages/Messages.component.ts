import { Component, OnInit } from '@angular/core';
import { DataService } from './Messages-Api';


@Component({
  selector: 'app-Messages',
  templateUrl: './Messages.component.html',
  styleUrls: ['./Messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  postFach: any[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe(data => {
      // Handle the fetched data here
      console.log(data);

      this.postFach = data;
    });
  }
}
