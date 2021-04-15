import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualRouteKeeperService {
  private actualRouteSubject = new BehaviorSubject('/home');
  actualRouteObservable = this.actualRouteSubject.asObservable();

  constructor() { }

  changeRoute(route: string) {
    this.actualRouteSubject.next(route);
  }
}
