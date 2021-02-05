import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'daja-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  active = 0;
  disabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}
