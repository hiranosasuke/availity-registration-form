import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/core/shared/shared.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [SharedModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
