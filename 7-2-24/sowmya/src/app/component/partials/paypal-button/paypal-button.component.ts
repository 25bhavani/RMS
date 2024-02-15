// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-paypal-button',
//   templateUrl: './paypal-button.component.html',
//   styleUrl: './paypal-button.component.css'
// })
// export class PaypalButtonComponent {
//
// }


// paypal-button.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent {
  @Input() order: any; // Assuming 'order' is an input property
}
