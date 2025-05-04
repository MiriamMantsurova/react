import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-ssr-app';

  login() {
    window.location.href = 'https://app-fe8itjcv4qcd.frontegg.com/oauth/login';
  }
}
