import { Component, OnInit } from '@angular/core';

import { UserDataService }  from './../../../services/user-data.service'

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: any;
  groupCount=1;

  constructor(private userService: UserDataService) { }

  ngOnInit() {
    this.userService.getAllGroups().subscribe((response) =>{
      console.log(response);
      this.groups = response;
    })

  }

}
