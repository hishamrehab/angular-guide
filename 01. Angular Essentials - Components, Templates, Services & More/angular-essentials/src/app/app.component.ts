import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  users = DUMMY_USERS;
   selectedUserId = "u1";


 get selectedUser() {
  return this.users.find(user => user.id === this.selectedUserId)!;
 }

    onSelectUser(id: string){
      this.selectedUserId = id;
    }
}
  