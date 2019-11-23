import { Component } from '@angular/core';


@Component({
    selector:'app-templateform',
    templateUrl:'./templateForm.component.html',
    styleUrls:['./templateForm.ocmponetn.css']
})


export class templateFormComponent{

    save(data){
        alert(JSON.stringify(data));
    }
}

   
    

