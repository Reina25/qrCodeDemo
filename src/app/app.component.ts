import { Component } from '@angular/core';
// import { QRCodeOverlay } from "@progress/kendo-angular-barcodes";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qrCodeDemo';

  qrCode1: string ;
  qrCode2: string;

  // public overlay: QRCodeOverlay = {
  //   type: "image",
  //   imageUrl:
  //     "https://demos.telerik.com/kendo-ui/content/shared/images/site/kendoka-cta.svg",
  //   width: 60,
  //   height: 60,
  // };

  constructor () {
    this.qrCode1 = 'https://icas.bau.edu.lb:8443/cas/login?service=https://mis.bau.edu.lb/web/v12/iconnectv12/cas/sso.aspx';
    this.qrCode2 = 'https://emn178.github.io/online-tools/md5.html';
  }



 
}
