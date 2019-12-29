import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:any;
  all_users:any = [];
  constructor(private data:UserDetailsService) { }

  ngOnInit() {
    this.data.getUser().subscribe(response=>{
        this.users = response;
        for(let i = 0;i<this.users.length;i++){
          this.all_users.push(this.users[i]);        
        }
        
    });
  }

  getUserDetails(id){    
    let get_details = document.getElementById(id);    
    if(get_details.style.display == 'none'){
      get_details.style.display = 'block';
    } else {
      get_details.style.display = 'none';
    }
  }

}
