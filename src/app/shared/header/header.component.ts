import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  message:string ='';
	count:number = 0;
	increaseByOne() {
	   this.count = this.count + 1;
	   this.message = "Counter: " + this.count;
	}
	decreaseByOne() {
	   this.count = this.count - 1;
	   this.message = "Counter: " + this.count;
	}
  ngOnInit() {
  }

}
