import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  openRecord(){

    this.router.navigate(["pages/user/add"]);
  }

}
