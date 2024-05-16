import { Component,Input,Output,EventEmitter,ViewChild } from '@angular/core';
@Component({
  selector:'card-title',
  template:`<div class="card-title"><ng-content></ng-content></div>`
})
export class Title{
}

@Component({
  selector:'sub-title',
  template:`<div class="card-subtitle text-gray"><ng-content></ng-content></div>`
})
export class SubTitle{

}



@Component({
  selector: 'card',
  templateUrl: './card.component.html',  
})
export class CardComponent  {
   tilte:Title;

   @Output()
   click:EventEmitter<any>=new EventEmitter();

  name = 'Working with Components';
}



