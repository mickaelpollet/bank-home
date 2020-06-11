import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Déclaration des services de l'application
import { SafesService }  from '../safes.service';

// Déclaration des Interfaces de l'application
import { Safe } from '../interfaces/safe.ifc';

@Component({
  selector: 'app-safe-details-ftr',
  templateUrl: './safe-details-ftr.component.html',
  styleUrls: ['./safe-details-ftr.component.css']
})
export class SafeDetailsFtrComponent implements OnInit {

  @Input() safe: Safe;

  constructor(
    private route: ActivatedRoute,
    private safesService: SafesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSafe();
  }

  getSafe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.safesService.getSafe(id)
      .subscribe(safe => this.safe = safe);
  }

  goBack(): void {
    this.location.back();
  }

}
