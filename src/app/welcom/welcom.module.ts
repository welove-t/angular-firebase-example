import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomRoutingModule } from './welcom-routing.module';
import { WelcomComponent } from './welcom/welcom.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [WelcomComponent],
  imports: [
    CommonModule,
    WelcomRoutingModule,
    MatButtonModule
  ]
})
export class WelcomModule { }
