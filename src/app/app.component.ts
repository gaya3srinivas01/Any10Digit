import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { IAcronym } from './acronym.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchText : string;
  acronyms: IAcronym[];
  title = 'Acronym Search by Unicef';
  constructor(private dataService: DataService){
  }
  ngOnInit(){
    this.dataService.getAcronyms().subscribe( data => {
      this.acronyms = data;
      console.log(data);
    });
  }
}
