import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
    localStorage.removeItem('isLoggedIn')
    this.routes.navigate(['/login']);
  }

}
