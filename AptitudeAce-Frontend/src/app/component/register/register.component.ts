import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

interface User {
  username: string;
  fullName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    username: '',
    fullName: '',
    email: '',
    password: ''
  };

  formOtp = {
    fOtp: ''
  };
  
  otp: string = '';
  otpSent: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.generateOTP();
  }

  generateOTP(): void {
    const digits = '0123456789';
    this.otp = '';
    for (let i = 0; i < 6; i++) {
      this.otp += digits[Math.floor(Math.random() * 10)];
    }
  }
  
  sendOTP(email: string): void {
    this.userService.sendOTP(email, this.otp).subscribe(
      response => {
        this.snack.open('Check your mail for OTP', 'OK', { verticalPosition: 'top' });
        this.otpSent = true;
      },
      error => {
        console.error('Error sending OTP:', error);
        this.snack.open('Error sending OTP. Please try again later.', 'OK', { verticalPosition: 'top' });
      }
    );
  }

  verifyOtp(formOtp: string): void {
    if (formOtp === this.otp) {
      this.registerUser();
    } else {
      this.snack.open('Wrong OTP entered', 'OK', { verticalPosition: 'top' });
    }
  }

  registerUser(): void {
    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log('User registered successfully:', response);
        this.snack.open('Registration successful', 'OK', { verticalPosition: 'top' });
        this.router.navigate(['login']);
      },
      error => {
        console.error('Error registering user:', error);
        this.snack.open('Error registering user. Please try again later.', 'OK', { verticalPosition: 'top' });
      }
    );
  }
}
