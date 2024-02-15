// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrl: './map.component.css'
// })
// export class MapComponent {
//
// }


// map.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input() order: any; // Assuming 'order' is an input property
  @Input() readonly: boolean = false; // Assuming 'readonly' is an input property

  constructor() {
  }
}
