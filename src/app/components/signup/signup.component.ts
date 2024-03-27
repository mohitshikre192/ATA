import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JwtDecodeService } from '../../services/jwt-decode.service';
import { Router } from '@angular/router';
import { Users } from '../../models/users';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userForm!: FormGroup;;
  constructor(private http: HttpClient,private router: Router,
    private service: JwtDecodeService,private fb: FormBuilder,
    private toast:ToastrService
    ){}
  
  
  ngOnInit():void{
  this.userForm=this.fb.group({
  name:['',[Validators.required,Validators.minLength(3)]],
   mobile_no:['',Validators.required],
  email:['',[Validators.required,Validators.email]],
  dob:['',Validators.required],
  gender:['',Validators.required],
  password:['',Validators.required],
  c_password:['',Validators.required]
  
  })
  }
  CreateUser(){
  debugger;
  this.service.createUsers(this.userForm.value)
  .subscribe ({
     next: (data:Users) => {
     
  
    //alert('signup success:');
   //localStorage.setItem('logintoken',data.token)
   this.toast.success('Registeration Succesful!!!','Success');
    this.router.navigateByUrl('/login');
  },error: () => {
  
         // alert('signup failed')
         this.toast.error('Registeration Unsuccesful!!!','Error ');
  
    //       this.loading = false;
    //      this.loginForm.reset();
  
  }
  })
  }
  }
  