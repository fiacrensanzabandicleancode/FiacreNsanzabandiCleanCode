import { Component, OnInit } from '@angular/core';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  faAngleDoubleDown = faAngleDoubleDown;

  constructor() { }

  ngOnInit() {
  }

}
