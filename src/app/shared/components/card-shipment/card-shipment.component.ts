import { Component, OnInit, Input } from '@angular/core';

export interface IShipment {
  id: number,
  status: string,
  amount: number,
  icon: string,
}

@Component({
  selector: 'app-card-shipment',
  templateUrl: './card-shipment.component.html',
  styleUrls: ['./card-shipment.component.scss'],
})
export class CardShipmentComponent  implements OnInit {
  @Input() 
  data: IShipment = {
    id: 1,
    status: "Pending",
    amount: 1,
    icon: "assets/icon/floating-icon.svg"
  }

  constructor() { 
  }

  ngOnInit() {}

}
