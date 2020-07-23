import { Component, OnInit, NgModule } from '@angular/core';
import { TopMenuComponent } from '../navigation/top-menu/top-menu.component';

@Component({
  selector: 'app-next-week',
  templateUrl: './next-week.component.html',
  styleUrls: ['./next-week.component.scss']
})

@NgModule({
  imports: [],
  declarations: [TopMenuComponent]
})

export class NextWeekComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
