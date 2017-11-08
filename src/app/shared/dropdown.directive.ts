import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  //Hostlistener will listen the click event to invoke toggleopen Function.

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
