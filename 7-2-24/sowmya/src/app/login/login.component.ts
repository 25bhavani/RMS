// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { OtpService } from './otp.service';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   otpSent: boolean = false;
//
//   constructor(private formBuilder: FormBuilder, private otpService: OtpService) {
//     this.loginForm = this.formBuilder.group({
//       mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
//       otp: ['', Validators.required]
//     });
//   }
//
//   sendOtp() {
//     const mobileNumber = this.loginForm.get('mobileNumber')?.value; // Add "?" to handle possible 'null'
//
//     if (mobileNumber) {
//       this.otpService.sendOtp(mobileNumber).subscribe(
//         () => {
//           console.log('OTP sent successfully');
//           this.otpSent = true;
//         },
//         (error) => {
//           console.error('Error sending OTP', error);
//         }
//       );
//     }
//   }
//
//   verifyOtp() {
//     const mobileNumber = this.loginForm.get('mobileNumber')?.value;
//     const otp = this.loginForm.get('otp')?.value;
//
//     if (mobileNumber && otp) {
//       this.otpService.verifyOtp(mobileNumber, otp).subscribe(
//         () => {
//           console.log('OTP verified successfully');
//           // Implement your login logic here (e.g., navigate to the home page)
//         },
//         (error) => {
//           console.error('Error verifying OTP', error);
//         }
//       );
//     }
//   }
// }

// login.component.ts
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { OtpService} from "../services/otp.service";
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
  // mobileNumberForm: FormGroup;
  // otpForm: FormGroup;
  // otpSent: boolean = false;
  //
  // constructor(private formBuilder: FormBuilder, private otpService: OtpService) {
  //   this.mobileNumberForm = this.formBuilder.group({
  //     mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
  //   });
  //
  //   this.otpForm = this.formBuilder.group({
  //     otp: ['', Validators.required]
  //   });
  // }
  //
  // sendOtp() {
  //   const mobileNumber = this.mobileNumberForm.get('mobileNumber')?.value;
  //
  //   if (mobileNumber) {
  //     this.otpService.sendOtp(mobileNumber).subscribe(
  //       () => {
  //         console.log('OTP sent successfully');
  //         this.otpSent = true;
  //       },
  //       (error) => {
  //         console.error('Error sending OTP', error);
  //       }
  //     );
  //   }
  // }
  //
  // verifyOtp() {
  //   const mobileNumber = this.mobileNumberForm.get('mobileNumber')?.value;
  //   const otp = this.otpForm.get('otp')?.value;
  //
  //   if (mobileNumber && otp) {
  //     this.otpService.verifyOtp(mobileNumber, otp).subscribe(
  //       () => {
  //         console.log('OTP verified successfully');
  //         // Implement your login logic here (e.g., navigate to the home page)
  //       },
  //       (error) => {
  //         console.error('Error verifying OTP', error);
  //       }
  //     );
  //   }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OtpService } from '../services/otp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mobileNumberForm: FormGroup;
  otpForm: FormGroup;
  otpSent: boolean = false;

  constructor(
    private fb: FormBuilder,
    private otpService: OtpService
  ) {
    this.mobileNumberForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

  sendOtp(): void {
    const mobileNumberControl = this.mobileNumberForm.get('mobileNumber');

    if (mobileNumberControl && mobileNumberControl.value) {
      const mobileNumber = mobileNumberControl.value;

      this.otpService.sendOtp(mobileNumber).subscribe(
        () => {
          this.otpSent = true;
        },
        (error) => {
          console.error('Error sending OTP:', error);
        }
      );
    }
  }

  verifyOtp(): void {
    const mobileNumberControl = this.mobileNumberForm.get('mobileNumber');
    const otpControl = this.otpForm.get('otp');

    if (mobileNumberControl && otpControl && mobileNumberControl.value && otpControl.value) {
      const mobileNumber = mobileNumberControl.value;
      const otp = otpControl.value;

      this.otpService.verifyOtp(mobileNumber, otp).subscribe(
        () => {
          console.log('OTP verification successful');
          // Add your logic for successful login
        },
        (error) => {
          console.error('Error verifying OTP:', error);
        }
      );
    }
  }
}
