import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  
  public opened : boolean = true;
  
  public icons = {cart:'shopping_cart', account:'account_circle', login:'how_to_reg', clear:'clear'};
  
  constructor(
    public router : Router
    ) { }
    
    public isToggleButtonHidden = () => {
      
      return this.router.url === "/register" ;
      
    };
    
    public isSideNavHidden = () => {
      
      return this.router.url === "/register";
      
    };
    
    public toggleSideNav = () => {
      
      this.toggleSidenavToggleButtonIcon();
      this.opened = !this.opened;
      
    };
    
    // TODO: create toggle function for sidenav mode
    // when  screen is small, sidenav should be over main component not adjsent
    // function { if screen size is small return 'over' else return 'side' }
    
    // TODO: create a button that is shown only when screen is small
    // button controls the open/close function of the sidenav
    
    public getSidenavToggleButtonIcon = () => {

      return this.router.url !== "/welcome" ? this.icons['cart'] : this.icons['login'];
      
    };
    
    public toggleSidenavToggleButtonIcon = () => {
      
      this.currentSidenavToggleButtonIcon = this.currentSidenavToggleButtonIcon !== this.icons['clear'] ? this.icons['clear'] : this.getSidenavToggleButtonIcon();
      
    };
    
    public currentSidenavToggleButtonIcon: string = this.icons['clear'];
    
  };
  