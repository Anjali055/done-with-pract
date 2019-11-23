import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector:'app-formbuilder',
    templateUrl:'./formBuilder.component.html',
    styleUrls:['./formBuilder.component.css']


})

export class FormbuilderComponent{

    studentModel:FormGroup;
    constructor(private f:FormBuilder){

        this.studentModel=this.f.group({
            firstname:[''],
            lastname:'',
            email:'',
            contact:''
        })
    }
    saveAction(a){
    
        alert(JSON.stringify(a))
    }

}

   
