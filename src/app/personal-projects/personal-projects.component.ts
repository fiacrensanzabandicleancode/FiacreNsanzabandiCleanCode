import { Component, OnInit } from '@angular/core';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent implements OnInit {

  faAngleDoubleDown = faAngleDoubleDown;
  
  constructor() { }

  ngOnInit() {
  }

}
