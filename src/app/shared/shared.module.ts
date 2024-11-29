import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,

    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    CallToActionComponent,
    TestimonialsComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    CallToActionComponent,
    TestimonialsComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
