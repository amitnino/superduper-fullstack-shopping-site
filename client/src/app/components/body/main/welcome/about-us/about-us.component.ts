import { Component, OnInit } from '@angular/core';
import { aboutUs } from '../../../../../../texts'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public aboutUsText: string = aboutUs;
  
  constructor() { }
  
  ngOnInit(): void {
  }


}
