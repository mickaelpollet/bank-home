import { Component, OnInit, Input } from '@angular/core';
import { User } from '../interfaces/user.ifc';

@Component({
  selector: 'app-user-edit-ftr',
  templateUrl: './user-edit-ftr.component.html',
  styleUrls: ['./user-edit-ftr.component.css']
})
export class UserEditFtrComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
