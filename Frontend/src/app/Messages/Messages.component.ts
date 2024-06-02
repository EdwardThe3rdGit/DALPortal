import { Component, OnInit } from '@angular/core';
import { DataService } from './Messages-Api';

@Component({
  selector: 'app-messages',
  templateUrl: './Messages.component.html',
  styleUrls: ['./Messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  postFach: any[] = [];
  selectedMessage: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe(data => {
      // Handle the fetched data here
      console.log(data);
      this.postFach = data;
    });
  }

  openModal(message: any) {
    this.selectedMessage = message;
  }
}
