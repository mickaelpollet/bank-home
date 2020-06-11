import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// Déclaration des services de l'application
import { MessagesService } from './messages.service';

// Déclaration des Interfaces de l'application
import { Safe } from './interfaces/safe.ifc';

// Déclaration des MOCKS de l'application
import { SAFES } from './mocks/safes.mck';

@Injectable({
  providedIn: 'root'
})
export class SafesService {

  private safesUrl = 'api/safes';  // URL to web api

  constructor(  private http: HttpClient,
                private messagesService: MessagesService) { }

  getSafes(): Observable<Safe[]> {
    return this.http.get<Safe[]>(this.safesUrl)
    .pipe(
      tap(_ => this.log('fetched Safes')),
      catchError(this.handleError<Safe[]>('getSafes', []))
    );
  }

  /*getSafe(id: number): Observable<Safe> {
    return of(SAFES.find(safe => safe.id === id));
  }*/

  getSafe(id: number): Observable<Safe> {
    const url = `${this.safesUrl}/${id}`;
    return this.http.get<Safe>(url).pipe(
      tap(_ => this.log(`fetched safe id=${id}`)),
      catchError(this.handleError<Safe>(`getSafe id=${id}`))
    );
  }







  private log(message: string) {
    this.messagesService.add(`SafesService : ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
