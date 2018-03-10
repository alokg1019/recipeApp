import { Directive, ElementRef, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{

    @HostBinding('class.open') isOpen = false;
 
    @HostListener('click') toggleOpen(){
        console.log("Value before is " + this.isOpen);
        this.isOpen = !this.isOpen;
        console.log("Value after toggle is " + this.isOpen);
        
    }
}