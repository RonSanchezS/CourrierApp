import {HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule],
  providers: []
})
export class AppComponent {
  constructor() {}
}
