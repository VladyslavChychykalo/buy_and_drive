import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss'],
})
export class AllCarsComponent implements OnInit {
  carsList: any = [
    { id: 1, title: 'BMW' },
    { id: 2, title: 'Mercedes' },
  ];
  activeUrl: any = [];

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.activeUrl = this.router.url.split('/').filter((el) => el !== '');

    console.log(this.activeUrl);
  }
}
