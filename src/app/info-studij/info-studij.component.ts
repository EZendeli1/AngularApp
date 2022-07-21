import { Component, OnInit, Input } from '@angular/core';
import{Student}from '../Student';


@Component({
  selector: 'app-info-studij',
  templateUrl: './info-studij.component.html',
  styleUrls: ['./info-studij.component.css']
})
export class InfoStudijComponent implements OnInit {

  @Input() student: Student; 

  constructor() { }

  ngOnInit(): void {
    
   
  }

  


}
