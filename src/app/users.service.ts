import { Injectable }               from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable, of }           from 'rxjs';
import { catchError, map, tap }     from 'rxjs/operators';

// Déclaration des services de l'application
import { MessagesService }          from './messages.service';

// Déclaration des Interfaces de l'application
import { User }                     from './interfaces/user.ifc';

// Déclaration des MOCKS de l'application quand on utilise directement les MOCKS
//import { USERS }                    from './mocks/users.mck';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = 'api/users';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(  private http: HttpClient,
                private messagesService: MessagesService) { }

  // Méthode de récupération directe depuis un MOCKS
  /*getUsers(): Observable<User[]> {
    return of(USERS);
  }*/

  // GET ALL Method
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
    .pipe(
      tap(_ => this.log('Utilisateurs récupérés')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  // UPDATE Method
  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      tap(_ => this.log(`Mise à jour de l'utilisateur id=${user.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  // POST : ADD Method
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`Ajout de l'utilisateur w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  // DELETE Method
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  private log(message: string) {
    this.messagesService.add(`UsersService : ${message}`);
  }

  searchUser(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<User[]>(`${this.usersUrl}/?lname=${term}`).pipe(
      tap(x => x.length ?
         this.log(`Utilisateur trouvé pour "${term}"`) :
         this.log(`Aucun utilisateur trouvé pour "${term}"`)),
      catchError(this.handleError<User[]>('searchUser', []))
    );
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
