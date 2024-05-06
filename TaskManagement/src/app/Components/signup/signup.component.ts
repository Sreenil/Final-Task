import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  
  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: [' '],
      mobile: [' '],
      email: [' '],
      password: [' ']
    })    
  }
  
  signUp() {
    this.http.post<any>("this.http://localhost:3000/signupUsers",this.signupForm.value).subscribe(res=> {
      alert("Signup successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=> {
      alert("something went wrong")
    })
  }

}
