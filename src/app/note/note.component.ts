import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { LoginService, User } from '../login/login.service';
import { Note, NoteService } from './note.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'daja-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  jwtToken: string;
  notes$: Observable<Note[]> = null;
  error: Object = null;

  constructor(private loginService: LoginService, private noteService: NoteService) { }

  ngOnInit(): void {
      this.jwtToken = this.loginService.getJwtToken();
      this.notes$ = this.noteService.getNotes(this.jwtToken).pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      );
  }

}
