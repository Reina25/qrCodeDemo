import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qrCodeDemo';

  myAngularxQrCode: string ;

  constructor () {
    this.myAngularxQrCode = 'https://icas.bau.edu.lb:8443/cas/login?service=https://mis.bau.edu.lb/web/v12/iconnectv12/cas/sso.aspx';
  }

  div1:boolean=true;
  div2:boolean=false;
  div3:boolean=false;
  div4:boolean=false;

  ShowDiv1Function(){
    this.div1=true;
    this.div2=false;
    this.div3=false;
    this.div4=false;
  }

  ShowDiv2Function(){
    this.div1=false;
    this.div2=true;
    this.div3=false;
    this.div4=false;
  }

  ShowDiv3Function(){
    this.div1=false;
    this.div2=false;
    this.div3=true;
    this.div4=false;
  }

  ShowDiv4Function(){
    this.div1=false;
    this.div2=false;
    this.div3=false;
    this.div4=true;
  }

  ShowDiv5Function(){
    
  }
}
