import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  L  from "wrld.js";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
    L.Wrld.map("map", "43cb9d7643cf548744f4d323be232eed",{
      center: [37.7858, -122.401],
      zoom: 18,
      indoorsEnabled: true,
      keyboard:true
    });
  }

}
