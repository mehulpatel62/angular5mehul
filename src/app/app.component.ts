import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogs';
@ViewChild(HeaderComponent)
    private numberComponent: HeaderComponent;
    increase() {
       this.numberComponent.increaseByOne();
    }
    decrease() {
       this.numberComponent.decreaseByOne();
    }
  ngOnInit() { 
     
   } 
}
