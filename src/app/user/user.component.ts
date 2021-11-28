import { Component, Input, OnInit } from '@angular/core';

interface UserInterface {
  name: "john1",
  age: "32",
  id: 0
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: UserInterface
  constructor() {
    this.user = {} as UserInterface;
  }

  ngOnInit(): void {
  }

}
