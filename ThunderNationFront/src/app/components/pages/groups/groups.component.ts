import { Component, OnInit } from '@angular/core';

import { UserDataService }  from './../../../services/user-data.service'

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private userService: UserDataService) { }

  ngOnInit() {
    this.userService.getGroups().subscribe((response) =>{
      console.log(response);
      this.groups = response;
    })

  }

}
