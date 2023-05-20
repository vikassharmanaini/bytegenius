import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { HeaderComponent } from './header/header.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { SocialComponent } from './social/social.component';

import { MatIconModule } from '@angular/material/icon';
import { SkillsComponent } from './skills/skills.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ImpressionComponent } from './impression/impression.component';
@NgModule({
  declarations: [
    PortfolioComponent,
    HeaderComponent,
    QualificationsComponent,
    SocialComponent,
    SkillsComponent,
    ImpressionComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
  ]
})
export class PortfolioModule { }
