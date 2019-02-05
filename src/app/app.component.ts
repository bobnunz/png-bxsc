
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  mainTabsPxHeight: number;
  constructor (){
}
   
  ngOnInit() {
    this.mainTabsPxHeight = document.getElementById("mainTabs").offsetHeight;
    let x = this.mainTabsPxHeight;
    console.log("material tabs height=" + x);

  }


}
