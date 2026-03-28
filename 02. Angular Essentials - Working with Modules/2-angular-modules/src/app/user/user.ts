import { Component , EventEmitter, Input , Output}  from '@angular/core';
import { type UserType } from './user.model';

//  interface UserType {
//   id: string, 
//   avatar: string,
//   name: string
//  }

   @Component({
    selector: 'app-user',
    templateUrl: './user.html',
    styleUrl: './user.css',
  })

export class User {
  @Input({required: true}) user!: UserType;
  @Input({required: true}) selected!: boolean;
  @Output() select =  new EventEmitter<string>();

 get imagePath(){
   return 'assets/users/' + this.user.avatar;
  }
 
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

