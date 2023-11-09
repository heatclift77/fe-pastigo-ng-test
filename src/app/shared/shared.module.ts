import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { CardShipmentComponent } from './components/card-shipment/card-shipment.component';
import { CardShipmentDetailComponent } from './components/card-shipment-detail/card-shipment-detail.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { TabHeaderComponent } from './components/tab-header/tab-header.component';
import { HeaderContentLayoutComponent } from './components/header-content-layout/header-content-layout.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    BottomNavComponent, 
    CardShipmentComponent, 
    CardShipmentDetailComponent, 
    BackButtonComponent, 
    TabHeaderComponent, 
    HeaderContentLayoutComponent
  ],
	exports: [
    BottomNavComponent, 
    CardShipmentComponent, 
    CardShipmentDetailComponent, 
    BackButtonComponent, 
    TabHeaderComponent, 
    HeaderContentLayoutComponent
  ]
})

export class SharedModule {
  constructor() {
  }
}
