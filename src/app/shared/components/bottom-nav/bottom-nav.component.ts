import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

interface bottomNav {
  id: number,
  icon?: string,
  label: string,
  floating?: boolean,
  active: boolean,
  url: string,
}

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss'],
})
export class BottomNavComponent  implements OnInit {

  data: Array<bottomNav> = [
    {
      id: 1,
      icon: "home-outline",
      label: "Beranda",
      active: false,
      url: "/home",
    },
    {
      id: 2,
      icon: "map-outline",
      label: "Nearby",
      active: false,
      url: "#",
    },
    {
      id: 3,
      label: "Paket Anda",
      active: false,
      floating: true,
      url: "#",
    },
    {
      id: 4,
      icon: "notifications-outline",
      label: "Notifications",
      active: false,
      url: "#",
    },
    {
      id: 5,
      icon: "person-outline",
      label: "Account",
      active: true,
      url: "/profile",
    },
  ]

  activeStyleIcon: string = "text-[24px] text-[#E52138]"
  activeStyleText: string = "text-[10px] text-[#E52138]"
  inActiveStyleIcon: string = "text-[24px] text-[#98A2B3]"
  inActiveStyleText: string = "text-[10px] text-[#98A2B3]"

  constructor(private router: Router ) {
   }

  onClick(item: bottomNav) {
    const arr = this.data.map((element) => {
      if(element.id === item.id) {
        return {
          ...element,
          active: true
        } 
      } else {
        return {
          ...element,
          active: false,
        }
      }
    })

    this.data = arr

    if(item.url === "#") return
    this.router.navigate([item.url])
  }

  ngOnInit() {
  }

}
