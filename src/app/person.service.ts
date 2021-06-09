import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { catchError, map, tap } from 'rxjs/operators';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient
    ) { }

  private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
		console.log(error);
		return of(result as T);
		};
	}

  addPerson(person: FormGroup): Observable<any> {
    const data = JSON.stringify(person);
    const url = `${environment.personUrl}/${environment.addPerson}`;
    return this.http.post<any>(url,​​
    {data: data},
    {headers: { 'Content-Type': 'application/json' }})
    .pipe(
      tap((newPerson: Person) => console.log(`added person w/ id=${newPerson.id}`)),
      catchError(this.handleError<Person>('addPerson'))
    );
  }

  getPersons(): Observable<Person[]> {
    const url = `${environment.personUrl}/${environment.getPerson}`;
		return this.http.get<Person[]>(url)
			.pipe(
			tap(_ => console.log('fetched persons')),
			catchError(this.handleError<Person[]>('getPersons', []))
			);
	}

  deletePerson(person: Person): Observable<Person> {
    const url = `${environment.personUrl}/${environment.deletePerson}`;
    const data = JSON.stringify(person);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: data,
    };
    return this.http.delete<Person>(url,  options).pipe(
      tap(_ => console.log(`deleted person with id=${person.id}`)),
      catchError(this.handleError<Person>('deletePerson'))
    );
  }
}
