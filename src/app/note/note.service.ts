import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorResponseService } from '../shared/error-response.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  noteUrl = 'note';

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  getNotes() : Observable<Note[]> {
    return this.http.get<Note[]>(environment.SERVER_URL + this.noteUrl).pipe(
      catchError(this.errorResponseService.handleError));
  }

  postNote(note: Note) : Observable<Note> {
    return this.http.post<Note>(environment.SERVER_URL + this.noteUrl, note).pipe(
      catchError(this.errorResponseService.handleError));
  }

}

export class Note {
  id: number;
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}
