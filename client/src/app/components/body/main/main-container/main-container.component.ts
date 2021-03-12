import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavService } from 'src/app/services/side-nav/side-nav.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  constructor(
    public _sn: SideNavService,
    public router: Router
  ) { };

  ngOnInit(): void {
  };

};
