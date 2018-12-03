import { Component, OnInit } from '@angular/core';
import {audiService} from '../services/audi.service';
import { Observable } from 'rxjs';
import {audi} from '../audi.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-audi-details',
  templateUrl: './audi-details.component.html',
  styleUrls: ['./audi-details.component.css']
})
export class audiDetailsComponent implements OnInit {

  
  audi: any = [];

  constructor(private ps:audiService){}

  ngOnInit(){
   
    this.ps.getaudiData().subscribe(data => {
        this.audi = data;
    });
   }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.ps.deleteaudi(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}
