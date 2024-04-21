import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';



@NgModule({
  declarations: [],
  imports: [
    CommonModule

  ],
  exports:[
    RadioButtonModule,
    ButtonModule,
    MenubarModule,
    ChartModule,
    InputTextModule,
    PasswordModule

  ]
})
export class PrimengModule { }
