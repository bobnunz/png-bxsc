
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  constructor (){
}
   
  ngOnInit() {
    let x = document.getElementById("mainTabs").offsetHeight;
    console.log("material tabs height=" + x);

  }


}
