import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  user = "Tarık";
  items = [
    {description:"Breakfast" ,action:"No"},
    {description:"Fitness" ,action:"No"},
    {description:"Bills" ,action:"No"},
    {description:"Cinema" ,action:"No"}
  ]
}
