import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'hello world how are you doing';

  // jsonValue = {
  //   a: 'hello',
  //   b: 'world',
  // };

  userObject = {
    name: "jhon",
    age: "32",
    id: 0
  }

  newDate = new Date();

  constructor(private httpService: HttpService) { }

  handleEvent(event: any) {
    console.log(event);
    
  }
}