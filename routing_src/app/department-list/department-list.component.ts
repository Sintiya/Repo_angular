import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
})
export class DepartmentListComponent {


departments =[
    {deptno:11,deptname:'BigData',Location:'Chennai'},
    {deptno:12,deptname:'BigData',Location:'Chennai'},
    {deptno:13,deptname:'Angular',Location:'Pune'},
    {deptno:14,deptname:'C++',Location:'Gurgaon'},
    {deptno:15,deptname:'SAP',Location:'Noida'},
    {deptno:16,deptname:'Testing',Location:'Bangalore'},
    {deptno:17,deptname:'SFDC',Location:'Hyderabad'},
    {deptno:18,deptname:'Oracle',Location:'Kolkata'},
    {deptno:19,deptname:'Avanade',Location:'Trivendrum'},
    {deptno:20,deptname:'Analytics',Location:'Chicago'} ];

  constructor() { }


}
