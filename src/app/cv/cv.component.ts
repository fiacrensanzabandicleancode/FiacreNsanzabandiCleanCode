import { Component, OnInit } from '@angular/core';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  faCloudDownloadAlt = faCloudDownloadAlt;

  constructor() { }

  ngOnInit() { }

}
