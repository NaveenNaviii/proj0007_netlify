import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  digits:number[]=[1,2,3,4,5,6,7,8,9,10,11,12]

  hourHandPosition=0;
  minuteHandPosition=0;
  SecondHandPosition=0;

  counter!:Subscription;

  constructor() { }

  ngOnInit(): void {
    this.startClock();
  }

  startClock(){
    this.counter=timer(0,1000).subscribe((res)=>{
      let date=new Date();

      let second= date.getSeconds();
      let minute=date.getMinutes();
      let hour=date.getHours();
      let day=date.getDate();
      let month=date.getMonth()+1;
      let year=date.getFullYear();

      this.SecondHandPosition=second*6;
      this.minuteHandPosition=minute*6;
      this.hourHandPosition=(hour>11?hour-12:hour)*30 + Math.floor(minute/12)*6;
    });

  }

}
