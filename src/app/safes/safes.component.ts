import { Component, OnInit } from '@angular/core';
import { Safe } from '../interfaces/safe.ifc';
import { SafesService } from '../safes.service';

@Component({
  selector: 'app-safes',
  templateUrl: './safes.component.html',
  styleUrls: ['./safes.component.css']
})
export class SafesComponent implements OnInit {

  safes: Safe[];

  constructor(private safesService: SafesService) { }

  ngOnInit(): void {
    this.getSafes();
  }

  getSafes(): void {
    this.safesService.getSafes()
        .subscribe(safes => this.safes = safes);
  }

}
