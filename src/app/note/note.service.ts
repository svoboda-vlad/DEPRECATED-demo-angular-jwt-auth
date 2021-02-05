import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  noteUrl = 'note';

  constructor(private http: HttpClient) { }

  getNotes(jwtToken: string) : Observable<Note[]> {
    const options = {
      headers: new HttpHeaders({
        Authorization: jwtToken
      })
    };
    return this.http.get<Note[]>(environment.SERVER_URL + this.noteUrl, options);
  }

  postNote(note: Note, jwtToken: string) : Observable<Note> {
    const options = {
      headers: new HttpHeaders({
        Authorization: jwtToken
      })
    };
    return this.http.post<Note>(environment.SERVER_URL + this.noteUrl, note, options);
  }


}

export class Note {
  id: number;
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}
