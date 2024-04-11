import { Component } from '@angular/core';
import { RpsService } from '../rps.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  user: string = '';
  pass: string = ''

  isError: boolean = false;

  constructor(private rpsService: RpsService, private router: Router){

  }

  login(): void{

this.rpsService.setUserPass(this.user,this.pass);
this.rpsService.startMatch().subscribe(resp =>  this.router.navigateByUrl('/match')
,(error : HttpErrorResponse)=>
  {
    console.log(error.ok);
    this.isError = true;
  });

  }
}
