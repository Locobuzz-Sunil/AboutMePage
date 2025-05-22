import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutMeComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aboutme_Page';
}
