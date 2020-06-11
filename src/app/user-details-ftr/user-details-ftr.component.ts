import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Déclaration des services de l'application
import { UsersService }     from '../users.service';

// Déclaration des Interfaces de l'application
import { User } from '../interfaces/user.ifc';

@Component({
  selector: 'app-user-details-ftr',
  templateUrl: './user-details-ftr.component.html',
  styleUrls: ['./user-details-ftr.component.css']
})
export class UserDetailsFtrComponent implements OnInit {

  @Input() user: User;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    this.usersService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
