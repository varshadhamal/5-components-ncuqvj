import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PanelModule } from '../panel/panel.module';

//importing Login Module right here
import  {LoginModule} from '../login/login.module';

import { AppComponent } from './app.component';
import {VoterComponent} from '../voter/voter.component';
import {VoteTakerComponent} from '../voter/votetaker.component';
import { CardComponent } from '../card/card.component';
import { Title } from '../card/card.component';
import { SubTitle } from '../card/card.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,PanelModule,LoginModule],
  declarations: [ AppComponent, HelloComponent,CardComponent,Title,SubTitle,VoterComponent,VoteTakerComponent],
  bootstrap:    [ AppComponent ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
