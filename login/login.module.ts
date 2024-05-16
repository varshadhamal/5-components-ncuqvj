import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
imports:[FormsModule,ReactiveFormsModule,CommonModule],
declarations:[LoginComponent],
exports:[LoginComponent]
})
export class LoginModule{

}