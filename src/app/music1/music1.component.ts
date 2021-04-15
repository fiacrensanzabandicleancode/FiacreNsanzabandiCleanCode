import { Component, OnInit } from '@angular/core';
import { ActualRouteKeeperService } from '../service/actual-route-keeper.service';

@Component({
  selector: 'app-music1',
  templateUrl: './music1.component.html',
  styleUrls: ['./music1.component.css']
})
export class Music1Component implements OnInit {

  route = '/hobbies/ntimuze-muhave-mutumaramaza';

  constructor(private actualRouteKeeperService: ActualRouteKeeperService) { }

  ngOnInit() {
    this.actualRouteKeeperService.changeRoute(this.route);
  }

}
