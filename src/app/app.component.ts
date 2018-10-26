import { Component } from '@angular/core';
import { StateManager } from './common/StateManager';
import { Location } from '@angular/common';
declare var CryptoJS:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  AccountNumber:number;
  SortCode:number;
  disAccNo:any = "Account Number : ";
  disSortCode:any = "Sort Code : ";
  message:string = "";
  onSave(){
    try{
        console.log("Account Number : ",this.AccountNumber);
        console.log("Sort Code : ",this.SortCode);
        this.disAccNo += this.AccountNumber;
        this.disSortCode += this.SortCode;

    }catch{
      console.error("Error");
    }
  }


  getBytes(iText:string){
    var bytes = [];
    for (var i = 0; i < iText.length; ++i){
        bytes.push(iText.charCodeAt(i));
    }
    return bytes;
  }

  encrypt(){
    // Approach 1
    var keyHex = CryptoJS.enc.Base64.parse("E$@Efd45$#Wddsf#0WSdPSD4");
    let plainKey = "E$@Efd45$#Wddsf#0WSdPSD4";
    let plainIv = "5%&ERfd4";
    console.log(keyHex);
    //var iv = CryptoJS.enc.Base64.parse("5%&ERfd4");
    //var iv = CryptoJS.enc.Utf8.parse("5%&ERfd4");

	    	/*var encryptd = CryptoJS.TripleDES.encrypt(this.message, keyHex, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });*/

    // Approach 2
    //var keyWords = CryptoJS.enc.Utf8.parse(plainKey);
    //var iv = CryptoJS.enc.Utf8.parse(plainIv);
    var keyWords = CryptoJS.enc.Latin1.parse(plainKey);
    var iv = CryptoJS.enc.Latin1.parse(plainIv);
    console.log(keyWords);
    console.log(iv);
    //var keyWords = this.getBytes(plainKey);
    var messageWords = CryptoJS.enc.Utf8.parse(this.message);
    console.log(messageWords);
    //var desEncryptor = CryptoJS.algo.TripleDES.createEncryptor(keyWords,iv);
    //console.log(desEncryptor);
    var encrypted = CryptoJS.TripleDES.encrypt(messageWords, keyWords, { iv: iv });
    console.log(encrypted);
    var ciphertext = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    console.log(ciphertext);
    //var ivWords = CryptoJS.lib.WordArray.create(iv);
        //var encryptd = CryptoJS.TripleDES.encrypt(this.message, keyHex);
        //console.log(encryptd.ciphertext.toString());
        this.message = ciphertext;
        //this.message = encryptd.toString();
  }

  decrypt(){
    var keyHex = CryptoJS.enc.Base64.parse("E$@Efd45$#Wddsf#0WSdPSD4");
    let plainIv = "5%&ERfd4";
    var iv = CryptoJS.enc.Base64.parse("5%&ERfd4");
    let plainKey = "E$@Efd45$#Wddsf#0WSdPSD4";

    /*var decrypted = CryptoJS.TripleDES.decrypt(this.message,keyHex,{
      iv: iv,
      mode: CryptoJS.mode.CBC,
	    padding: CryptoJS.pad.Pkcs7
    });*/


    //var keyWords = CryptoJS.enc.Utf8.parse(plainKey);
    var keyWords = CryptoJS.enc.Latin1.parse(plainKey);
    var iv = CryptoJS.enc.Latin1.parse(plainIv);
    console.log(keyWords);
    console.log(iv);
    //var messageWords = CryptoJS.enc.Utf8.parse(this.message);
    //var messageWords = CryptoJS.enc.Base64.parse(this.message);
    //console.log(messageWords);
    //var desDecryptor = CryptoJS.algo.TripleDES.createEncryptor(keyWords,iv);
    //console.log(desDecryptor);
    var decrypted = CryptoJS.TripleDES.decrypt(this.message, keyWords, { iv: iv });
    console.log(decrypted)
    var plainText = CryptoJS.enc.Utf8.stringify(decrypted);
    console.log(plainText);
    //var decrypted = CryptoJS.TripleDES.decrypt(this.message,plainKey)
    //console.log(decrypted.toString(CryptoJS.enc.Base64));
    this.message = plainText;
  }

  back(){
    try{
      this.state.goBack();
    }catch(error){
      console.error(error);
    }
  }

  forward(){
    try{
      this.state.goForward();
    }catch(error){
      console.error(error);
    }
  }

  go(){
    try{
      this.state.go("localhost:4201/register");
    }catch(error){
      console.error(error);
    }
  }
state:StateManager;
  constructor(private location:Location){
      //this.state = new StateManager(location);
      console.log(this.state);
  }

  onSelect(iEvent){
    try{
      this.roll = iEvent;
    }catch(error){
      console.error(error);
    }
  }

  placeholder:string = "Name";
  id:any;
  roll:any;
  setId(){
    this.id = this.roll;
  }
  list:Array<any> = [];
  ngOnInit(){
    this.list = [
      {label:"Sachin",value:20},
      {label:"sagar",value:30},
      {label:"shubham",value:20},
      {label:"others",value:10}
    ]
  }
}
