import { Component, Input, OnDestroy } from '@angular/core';
 
import { MissionService } from './mission.service';
import { Subscription }   from 'rxjs/Subscription';
export class AstronauntComponent{

  @Input()
  astronaunt:string;
  mission='<no mission announced>';
  confirmed=false;
  announced=false;
  subscription:Subscription;


}