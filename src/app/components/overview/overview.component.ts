import { Component, OnInit, NgModule } from '@angular/core';
import { TopMenuComponent } from '../navigation/top-menu/top-menu.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

@NgModule({
  imports: [],
  declarations: [TopMenuComponent]
})

export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
