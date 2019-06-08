import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  cvPdfUrl: string = "";
  isPdfVisible: boolean = false;
  isDownloadMessageVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setCvPdfUrl() {
    if (this.cvPdfUrl == "") {
      this.isPdfVisible = true;
      this.cvPdfUrl = "assets/files/fiacreNsanzabandiCV.pdf";
    } else {
      this.isPdfVisible = false;
      this.cvPdfUrl = "";
    }
  }

  deleteCvPdfUrl() {
    this.isPdfVisible = false;
  }

  /**
   * Show the CV PDF download message.
   * @author fnsanzabandi
   */
  showCvPdfDownloadMessage() {
    this.isDownloadMessageVisible = true;
  }

}
