import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-container',
  templateUrl: './side-bar-container.component.html',
  styleUrls: ['./side-bar-container.component.css']
})
export class SideBarContainerComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

}
