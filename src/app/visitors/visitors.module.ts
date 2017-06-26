import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { VisitorsComponent } from './visitors.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    LandingPageComponent,
    VisitorsComponent,
    NewsletterComponent
  ],
  exports: [
    VisitorsComponent
  ]
})
export class VisitorsModule { }
