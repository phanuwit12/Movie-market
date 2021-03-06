import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HttpService } from 'src/services/http.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public total = 0

  constructor(public router: Router,public http: HttpService) { }

  ngOnInit(): void {
    
    this.http.totalCart = this.checkLength()
  }
  checkLength(){
    return JSON.parse(window.localStorage.getItem('cart'))? JSON.parse(window.localStorage.getItem('cart')).length:0
  }

}
