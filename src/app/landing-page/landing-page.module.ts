import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { SkellyBoyModule } from './skelly-boy/skelly-boy.module';
import { LogoModule } from './logo/logo.module';
import { MintButtonModule } from './mint-button/mint-button.module';
import { SkellyNecklaceModule } from './skelly-necklace/skelly-necklace.module';
import { TimerModule } from './timer/timer.module';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    SkellyBoyModule,
    LogoModule,
    MintButtonModule,
    SkellyNecklaceModule,
    TimerModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
