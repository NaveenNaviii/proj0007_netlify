import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {


  }


}
