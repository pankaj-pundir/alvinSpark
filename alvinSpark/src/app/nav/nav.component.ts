import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // appTitle: string;
  @Input() appTitle:string;
  appTitle2 :string = "AlvinSpark";
  appTitle1 :string = "Alvin Spark";
  counter = 0;
  constructor() { }

  ngOnInit() {
  }

  renameTitle(){
    this.counter+=1;
    if(this.counter % 2){
      this.appTitle = this.appTitle2;
    }
    else this.appTitle = this.appTitle1;
    // alert(this.counter);
  }

}
