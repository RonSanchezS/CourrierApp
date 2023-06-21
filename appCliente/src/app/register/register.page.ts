import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [LoginService]

})
export class RegisterPage implements OnInit {

  username : string = "";
  password : string = "";
  email : string = "";

  constructor(private api : LoginService, private router : Router) { }

  ngOnInit() {
  }

  register(){
    console.log("Username: " + this.username);
    console.log("Password: " + this.password);
    console.log("Email: " + this.email);

    this.api.register(this.username, this.password, this.email).subscribe((res : any) => {
      console.log(res);
      if(res.status == 200){
        this.router.navigate(['/login']);
      }
    }
    );

  }

}
