import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  links = ["Current Week", "Next Week", "Goals", "Overview"]

  constructor() { }

  ngOnInit() {
  }

  exports: [
    SideMenuComponent
  ]

}
