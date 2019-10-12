import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Session } from '../_models/session';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
baseUrl = environment.apiUrl;

constructor(private http: HttpClient, private datePipe: DatePipe) { }

addSession(StartDate: Date, EndDate: Date, name: string) {
  const startDate = this.datePipe.transform(StartDate, 'MM/dd/yyyy');
  const endDate = this.datePipe.transform(EndDate, 'MM/dd/yyyy');
  return  this.http.post(this.baseUrl + 'session', {startDate, endDate, name});
}

getSessions(): Observable<Session[]> {
  return this.http.get<Session[]>(this.baseUrl + 'session');
}

updateSession(session: Session) {
  return this.http.put(this.baseUrl + 'session', session);
}

deleteSession(id: number) {
  return this.http.post(this.baseUrl + 'session/DeleteSession/' + id, {});
}

}
