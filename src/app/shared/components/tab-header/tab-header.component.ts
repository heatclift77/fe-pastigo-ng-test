import { Component, OnInit } from '@angular/core';
export interface ITabMenu {
  id: number,
  label: string,
  active: boolean,
}
@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss'],
})
export class TabHeaderComponent  implements OnInit {
  tabMenu: Array<ITabMenu> = [
    {
      id: 1,
      label: "Pending",
      active: true,
    },
    {
      id: 2,
      label: "In Progress",
      active: false,
    },
    {
      id: 3,
      label: "Success",
      active: false,
    },
    {
      id: 4,
      label: "Trouble",
      active: false,
    }
  ]

  constructor() { }

  ngOnInit() {}

  onClick(item: ITabMenu) {
    const newArr = this.tabMenu.map(element => {
      if (element.id === item.id) {
        return  {
          ...element,
          active: true
        }
      } else {
        return {
          ...element,
          active: false
        }
      }
    })

    this.tabMenu = newArr
  }

}
