import { Component, OnInit } from '@angular/core';

// Déclaration des services de l'application
import { MessagesService }  from '../messages.service';
import { UsersService }     from '../users.service';

// Déclaration des Interfaces de l'application
import { User } from '../interfaces/user.ifc';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //users: User[];
  users: User[];
  selectedUser: User;

  constructor(  private usersService: UsersService,
                private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  editUser(user: User): void {
    this.selectedUser = user;
    this.messagesService.add(`Edition de l'utilisateur ${user.id}`);
  }

  getUsers(): void {
    this.usersService.getUsers()
        .subscribe(users => this.users = users);
  }

  add(lname: string, fname: string): void {
    lname = lname.trim();
    lname = lname.trim();
    if (!lname || !fname) { return; }
    this.usersService.addUser({ lname, fname } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.usersService.deleteUser(user).subscribe();
  }

}
