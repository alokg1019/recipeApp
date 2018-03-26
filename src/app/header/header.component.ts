import { Component, Output, EventEmitter } from "@angular/core";
import { DataStorageService } from "../shared/date-storage.service";
import { Response} from "@angular/http";

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

    constructor(private dataStorageService: DataStorageService){}
    
    onSaveData(){
        this.dataStorageService.storeRecipes().subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

}