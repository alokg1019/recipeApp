import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'recipe';

  ngOnInit(){
      firebase.initializeApp({
        apiKey: "AIzaSyABN39zijmNla5k5eu4sJRJ9sw8qzip3j0",
        authDomain: "recipe-app-learning.firebaseapp.com"
      })
  }

  onNavigate(feature: string){
      console.log('Event received: '+ feature);
      this.loadedFeature = feature;
  }

}