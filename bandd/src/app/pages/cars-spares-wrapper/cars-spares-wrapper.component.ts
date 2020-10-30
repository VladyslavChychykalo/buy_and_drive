import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-spares-wrapper',
  templateUrl: './cars-spares-wrapper.component.html',
  styleUrls: ['./cars-spares-wrapper.component.scss'],
})
export class CarsSparesWrapperComponent implements OnInit {
  activeUrl: any = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.activeUrl = this.router.url.split('/').filter((el) => el !== '');
  }
}
