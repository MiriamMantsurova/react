import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FronteggAppModule } from '@frontegg/angular';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule,
    FronteggAppModule.forRoot({
      contextOptions: {
        baseUrl: 'https://app-fe8itjcv4qcd.frontegg.com',
        clientId: '7f1c1fd9-8f95-451b-9107-ff1bd10050f6'
      }
    })
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {} 