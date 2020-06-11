import { Component, OnInit } from '@angular/core';
import { Safe } from '../interfaces/safe.ifc';
import { SafesService } from '../safes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  safes: Safe[] = [];

  constructor(private safesService: SafesService) { }

  ngOnInit(): void {
    this.getSafes();
  }

  getSafes(): void {
    this.safesService.getSafes()
      .subscribe(safes => this.safes = safes.slice(1, 5));
  }

}
