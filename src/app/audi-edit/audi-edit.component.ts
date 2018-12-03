import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {audiService} from '../services/audi.service';
import { NgForm } from "@angular/forms";

//creating component


@Component({
  selector: 'app-audi-edit',
  templateUrl: './audi-edit.component.html',
  styleUrls: ['./audi-edit.component.css']
})
export class audiEditComponent implements OnInit {
  audi : any = [];
  myModel : String; 
  myColour : String;
  myCondition : String;
  myMileage : String;
  constructor(private router:Router, private route: ActivatedRoute, private service:audiService) { }


  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getaudi(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.audi = data;
      console.log(this.audi);
      this.myModel = this.audi.model;
      this.myColour = this.audi.colour;
      this.myCondition = this.audi.condition;
      this.myMileage = this.audi.mileage; 

      //console.log("message" +this.myTitle);

    });
  }
  onEditaudi(form: NgForm) {
    this.service.updateaudi(this.audi._id, form.value.model, form.value.colour, form.value.condition, form.value.mileage).subscribe(() =>
    {
      this.router.navigate(['/list']);
    });
  }

}
