import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Book} from "../components/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(environment.url_api + "/books");
  }

  getById(id: number):Observable<any> {
    return this.http.get(environment.url_api + "/books/" + id);
  }

  creat(book: Book):Observable<any> {
    return this.http.post(environment.url_api + "/books", book);
  }

  delete(id: number):Observable<any> {
    return this.http.delete(environment.url_api + "/books/" + id);
  }

  update(id: number, book: Book): Observable<any> {
    return this.http.put(environment.url_api + "/books/" + id, book );
  }
}
