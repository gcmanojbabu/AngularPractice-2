import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface UserInterface {
  name: string;
  age: string;
  id: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // user = {
  //   name: "john1",
  //   age: "32",
  //   id: 0
  // }
  @Input() user: UserInterface;

  // @Output() userEvent = new EventEmitter<UserInterface>();
  @Output() userEvent: EventEmitter<UserInterface>
  constructor() {
    this.userEvent=new EventEmitter<UserInterface>();
    this.user = {} as UserInterface;
  }

  ngOnInit(): void {
  }

  sendUserEvent(): void{
    this.userEvent.emit(this.user);
  }
}
