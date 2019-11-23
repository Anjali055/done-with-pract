import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiv-forms',
  templateUrl: './reactiv-forms.component.html',
  styleUrls: ['./reactiv-forms.component.css']
})
export class ReactivFormsComponent implements OnInit {

  data;
  constructor() { 
    this.data=new FormGroup({

      firstname:new FormControl(),
      lastname:new FormControl(),
      Address:new FormControl(),
      email:new FormControl(''),


      
    });

  }
  onClick(data){
    console.log(this.data);
  }


  ngOnInit() {
  }

 


}
