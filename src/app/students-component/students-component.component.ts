import { Component, OnInit } from '@angular/core';
import{Student}from '../Student';
import{StudentServiceService}from'../student-service.service';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-students-component',
  templateUrl: './students-component.component.html',
  styleUrls: ['./students-component.component.css']
})
export class StudentsComponentComponent implements OnInit {

  students:Student[];
  selectedStudent:Student;
  selectedStudent2:Student;

  constructor(private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents():void{

    this.studentService.getStudents()
    .subscribe(students => this.students=students);

  }

  onSelect(student:Student):void{
    this.selectedStudent=student;
    this.selectedStudent2=student;
  }



  add(firstName :string ,lastName:string,jmbag:string,numberOfECTS:number,tuitionShouldBePaid: boolean):void{
    firstName=firstName.trim();
    lastName=lastName.trim();
    jmbag=jmbag.trim();
    if(!firstName||!lastName||!jmbag||!numberOfECTS){return;}
    const dateOfBirth=new Date(1990);
    
    
    this.studentService.addStudent({ firstName, lastName, jmbag, dateOfBirth ,numberOfECTS  ,tuitionShouldBePaid} as Student)
    .subscribe(student =>{
      this.students.push(student);
    });   
    

  }


 
}
