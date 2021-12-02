import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // title = 'hello world how are you doing';

  // jsonValue = {
  //   a: 'hello',
  //   b: 'world',
  // };

  userObject = {
    name: "jhon",
    age: "32",
    id: 0,
    isColored: true
  }

  posts: any = this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts');


  // newDate = new Date();
  showUser: boolean = false;

  constructor(private httpService: HttpService) { }

  handleEvent(event: any) {
    console.log(event);
  }

  // getPosts(){
  //   this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts')
  //   .subscribe((response)=>{
  //     this.posts=response;
  //     console.log(this.posts);
  //   })
  // }

  ngOnInit(): void {
    // this.getPosts();
  }
}