import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {audiService} from '../services/audi.service';

@Component({
  selector: 'app-audi-create',
  templateUrl: './audi-create.component.html',
  styleUrls: ['./audi-create.component.css']
})
export class audiCreateComponent implements OnInit {

  constructor(private service:audiService) { }

  onAddaudi(form: NgForm) {

    this.service.addaudi(form.value.model, form.value.colour, form.value.condition, form.value.mileage).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {



  }

}
