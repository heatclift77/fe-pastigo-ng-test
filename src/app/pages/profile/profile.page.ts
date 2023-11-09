import { Component, OnInit } from '@angular/core';
import { IUser } from '../home/home.page';
interface menuProfile {
  id: number,
  icon: string,
  label: string,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

  menus: Array<menuProfile> = [
    {
      id: 1,
      icon: "lock-closed",
      label: "Ganti Kata Sandi",
    },
    {
      id: 2,
      icon: "star",
      label: "Beri Nilai Aplikasi",
    },
    {
      id: 3,
      icon: "notifications",
      label: "Notifikasi",
    },
    {
      id: 4,
      icon: "help-circle",
      label: "Bantuan",
    },
    {
      id: 5,
      icon: "shield",
      label: "Kebijakan Privasi",
    },
    {
      id: 6,
      icon: "log-out",
      label: "Keluar",
    }
  ]

  user: IUser = {
    id: 1,
    name: "Albertus Pangaribuan",
    phoneNumber: "+62822-8058-1234",
    email: "advenreey@gmail.com",
    avatar: "assets/avatar_sample_2.svg",
  }

  constructor() { }

  ngOnInit() {
  }

}
