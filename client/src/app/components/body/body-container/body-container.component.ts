import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavService } from 'src/app/services/side-nav/side-nav.service';

@Component({
  selector: 'app-body-container',
  templateUrl: './body-container.component.html',
  styleUrls: ['./body-container.component.css']
})
export class BodyContainerComponent implements OnInit {

  constructor(
    public router : Router,
    public _sideNavService: SideNavService
  ) { };

  ngOnInit(): void {
  };

};