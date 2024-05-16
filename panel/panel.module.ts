import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './panel.component';
import { PanelHeader } from './panel.component';
import { PanelFooter} from './panel.component';
import { PanelBody} from './panel.component';
import { PanelNavigation} from './panel.component';



@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [PanelComponent,PanelHeader,PanelFooter,PanelNavigation,PanelBody],
  exports:[PanelComponent,PanelHeader,PanelFooter,PanelNavigation,PanelBody]
})
export class PanelModule { }