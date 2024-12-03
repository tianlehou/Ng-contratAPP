import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { VideosComponent } from './pages/videos/videos.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { PersonRegisterComponent } from './auth/person-register/person-register.component';
import { CompanyRegisterComponent } from './auth/company-register/company-register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'signup/person', component: PersonRegisterComponent },
  { path: 'signup/company', component: CompanyRegisterComponent },
  { path: '**', redirectTo: 'home' },
];
