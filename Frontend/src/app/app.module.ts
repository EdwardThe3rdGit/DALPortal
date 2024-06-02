import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
import { AccountComponent } from './Account/Account.component';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './Assets/Assets.component';
import { MessagesComponent } from './Messages/Messages.component';
import { ContractsComponent } from './Contracts/Contracts.component';
import { ContractComponent } from './UniqueContract/Contracts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    MessagesComponent,
    AssetsComponent,
    ContractsComponent,
    ContractComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
