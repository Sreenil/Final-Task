import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  
  public loginForm! : FormGroup
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password:['']
    })
  }
  
  login() {
    this.http.get<any>("this.http://localhost:3000/signupUsers")
    .subscribe(res=> {
      const user = res.find((a:any)=> {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user) {
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }else {
        alert("User not Found");
      }
    },err=> {
      alert("Something went wrong")
    })
    }
}
