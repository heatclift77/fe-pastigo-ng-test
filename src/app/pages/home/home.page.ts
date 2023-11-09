import { Component } from '@angular/core';
import { IShipment } from 'src/app/shared/components/card-shipment/card-shipment.component';
import { Router } from '@angular/router';
export interface IUser {
  id: number,
  name: string,
  email?: string,
  avatar: string,
  phoneNumber?: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  shipmentSumarys: Array<IShipment>  = [
    {
      id: 1,
      status: "Pending",
      amount: 1,
      icon: "assets/icon/pending.svg"
    },
    {
      id: 2,
      status: "In Progress",
      amount: 1,
      icon: "assets/icon/inProgress.svg"
    },
    {
      id: 3,
      status: "Success",
      amount: 1,
      icon: "assets/icon/success.svg"
    },
    {
      id: 4,
      status: "Trouble",
      amount: 1,
      icon: "assets/icon/trouble.svg"
    },
  ]

  user: IUser = {
    id: 1,
    name: "Daniel Fernando",
    email: "daniel@gmail.com",
    avatar: "assets/avatar_sample_1.svg",
  }
  

  constructor(private router: Router) {}

  toPickUp() {
    this.router.navigate(["home/pickup"])
  }
}
