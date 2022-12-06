import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-http-client-module',
  templateUrl: './http-client-module.component.html',
  styleUrls: ['./http-client-module.component.css']
})
export class HttpClientModuleComponent implements OnInit {

result:any;
  constructor(private user:UserServiceService) { }

  ngOnInit(): void {
    this.user.getData().subscribe(data=>[
      this.result=data
    ])
  }

}
