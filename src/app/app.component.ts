import { Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dat:any;
  today:any;
  
  dateFormat: any = new Date();
  constructor(){}
  ngOnInit(): void { }
  submitForm(formDate)
    {
      
       this.dat=formDate.userDate.value;
       console.log("data is coming" ,this.dat);
       this.today=moment(this.dat).fromNow();
    }
  
 
  
  
}
