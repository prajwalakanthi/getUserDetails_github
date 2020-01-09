import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-user-cardview',
  templateUrl: './user-cardview.component.html',
  styleUrls: ['./user-cardview.component.css']
})
export class UserCardviewComponent implements OnInit {
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
