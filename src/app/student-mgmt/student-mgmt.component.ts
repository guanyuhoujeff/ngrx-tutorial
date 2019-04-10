import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../mock-students';

@Component({
  selector: 'app-student-mgmt',
  templateUrl: './student-mgmt.component.html',
  styleUrls: ['./student-mgmt.component.css']
})
export class StudentMgmtComponent implements OnInit {
  students = STUDENTS;
  newStudent = {
    id: undefined,
    no: undefined,
    name: undefined
  };

  constructor() { }

  ngOnInit() {
  }


}
