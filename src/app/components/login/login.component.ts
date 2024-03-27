import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtDecodeService } from '../../services/jwt-decode.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  loading=false;
  submitted=false;
  returnUrl!: string;
  order:any;
  
  loginobj:any={
    "mobile_no":"",
    "password":"",
    "role":""
  };
  errorMsg:any;
  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private service:JwtDecodeService,
    private http:HttpClient,
    private toast:ToastrService
      )
  {  this.order=this.router.getCurrentNavigation()?.extras.state;
  }
  
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      mobile:['',[Validators.required]],
      password:['',Validators.required],
      role:['',Validators.required]
    });
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f(){return this.loginForm.controls;}
  
  // onSubmit()
  // {
    // this.submitted =true;
  
    // if(this.loginForm.invalid)
    // {return;}
    // this.loading=true;
   
    // //this.service.getLoginT(this.loginobj)
    // .subscribe({
    //   next: () => {
    //     debugger
    //     // this.toast.success('Hello User', 'Welcome to ATA')
    //    alert("Login Successful!!!")
    //     const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //         this.router.navigateByUrl(returnUrl);
    //         this.loginForm.reset();
    //   },
  //     error: () => {
  
  //       alert('login failed')
  //       this.loading = false;
  //       this.loginForm.reset();
  //     }
  //   })
    
    
  // }
  
  onLogin()
  {
   
    this.http.post('https://localhost:7034/api/Login/',this.loginobj)
  .subscribe({
    next: (data:any) => {
     
      debugger;
      // alert('login success:');
      this.toast.success('Login Succesful!!','Success');
     localStorage.setItem('logintoken',data.token)

    
      this.router.navigateByUrl('/');
    },error: () => {
  
            // alert('login failed')
            this.toast.error('Login Failed!!!','Error')
   
            this.loading = false;
           this.loginForm.reset();
  
  }
  })
  
  }
  
  }
  