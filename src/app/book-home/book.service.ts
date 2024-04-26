import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IBook } from '../../models/IBook';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private allBooksEndpoint = 'http://localhost:3000/allBooks';

  constructor(private httpClient: HttpClient) {}

  getAllBooks(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.allBooksEndpoint);
  }
  private handleError(err: HttpErrorResponse) {
    return throwError(() => `An error occured: ${err.error.message}`);
  }
}
