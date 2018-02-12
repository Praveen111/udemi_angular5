import { Component } from '@angular/core';

@Component({
  selector: 'header-comp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
// @Input()str : string;
// @Output() myevent = new EventEmitter<string>();
  title = 'Header Works!';

// onClick(str : string){
// console.log('string:'+str);
// this.myevent.emit(str);
// }
}
