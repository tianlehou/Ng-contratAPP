import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { FeaturesComponent } from './shared/components/features/features.component';
import { CallToActionComponent } from './shared/components/call-to-action/call-to-action.component';
import { TestimonialsComponent } from './shared/components/testimonials/testimonials.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    CallToActionComponent,
    TestimonialsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html', // Archivo HTML del componente
  styleUrls: ['./app.component.css'], // Corrección aquí
})
export class AppComponent {
  title = 'contratAPP';
}
