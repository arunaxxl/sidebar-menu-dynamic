import { Component } from '@angular/core';
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'menu-component',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class MenuComponent {

 routes:any={
  Angular:"/pages/forms/inputs",
  React:"/pages/forms/layouts",
  Vue:"/pages/forms/buttons"
 }

  constructor(protected dateService: NbDateService<Date>) {

  }
}
