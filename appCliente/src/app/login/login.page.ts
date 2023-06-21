import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [LoginService]
})
export class LoginPage implements OnInit {


  username : string = "";
  password : string = "";

  constructor(private router : Router, private api : LoginService) { }

  ngOnInit() {
  }
  login() {

    this.api.login(this.username, this.password).subscribe((res : any) => {
     if(res.res == "error"){
      alert(res.message);
    }else{
      this.router.navigate(['/home']);
    }
    }
    );
  }
  register(){
    this.router.navigate(['/register']);
  }

}
