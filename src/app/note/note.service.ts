import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  noteUrl = 'note';

  constructor(private http: HttpClient) { }

  getNotes() : Observable<Note[]> {
    return this.http.get<Note[]>(environment.SERVER_URL + this.noteUrl);
  }

  postNote(note: Note) : Observable<Note> {
    return this.http.post<Note>(environment.SERVER_URL + this.noteUrl, note);
  }


}

export class Note {
  id: number;
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}
