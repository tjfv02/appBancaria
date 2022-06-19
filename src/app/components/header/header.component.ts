import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

 // eslint-disable-next-line @typescript-eslint/no-inferrable-types
 @Input() titulo: string= '';

}
