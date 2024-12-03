// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    SidebarComponent
  ],
  templateUrl: './app.component.html', // Archivo HTML del componente
  styleUrls: ['./app.component.css'], // Corrección aquí
  standalone: true,
})
export class AppComponent {
  title = 'contratAPP';
}
