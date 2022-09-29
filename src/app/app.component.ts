import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'su-app';
  
  count =0;

  number1=0;

  number2=0;

  result=0;

  listofnumber = [12,43,543,53,1];

  listofname = ["priya","sushil","uddeshya","pulak","pihu","my panda","sri panda"];

  increment = () =>{
    this.count++;
  }
  
  decrement = () =>{
    this.count--;
  }

  addition = () => {

    this.result=this.number1+this.number2;

  }
}
