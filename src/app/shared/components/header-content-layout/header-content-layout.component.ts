import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-content-layout',
  templateUrl: './header-content-layout.component.html',
  styleUrls: ['./header-content-layout.component.scss'],
})
export class HeaderContentLayoutComponent  implements OnInit {

  @Input() withBackground : boolean = false
  constructor() { }

  ngOnInit() {}

}
