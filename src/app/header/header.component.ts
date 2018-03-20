import { Component, Output, EventEmitter } from "@angular/core";

@Component(
    {
        selector:'app-header',
        templateUrl:'./header.component.html'
    }
)
export class HeaderComponent{
    
    // @Output() featuredEvent = new EventEmitter<string>();
    
    // onSelect(feature:string){
    //     console.log('Event emitted: ' + feature);
    //     this.featuredEvent.emit(feature);
    // }
}