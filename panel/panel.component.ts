import { Component,Input,ViewChild } from '@angular/core';


@Component({
  selector:'panel',
  templateUrl:'./panel.component.html',
})
export class PanelComponent{
  @Input()
  header:string;

}

@Component({
  selector:'panel-header',
  template:`<div class="panel-header">
  <div class="panel-title"><ng-content></ng-content></div>
  </div>
  "`
})
export class PanelHeader{

}

@Component({
selector:'panel-nav',
template:`<div class="panel-nav"><ng-content></ng-content></div>`
})
export class PanelNavigation{

}

@Component({
  selector:'panel-body',
  template:`<div class="panel-body"><ng-content></ng-content></div>`
})
export class PanelBody{

}

@Component({
  selector:'panel-footer',
  template:`<div class="panel-footer"><ng-content></ng-content></div>`
})
export class PanelFooter{

}