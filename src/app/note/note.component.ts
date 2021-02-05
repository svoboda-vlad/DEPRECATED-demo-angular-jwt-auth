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
    this.loginService.login(new User('user', 'password')).pipe(
      catchError(err => {
        this.error = err;
        return throwError(err);
      })
    ).subscribe((res) => {
      this.jwtToken = res.headers.get('Authorization');
      this.notes$ = this.noteService.getNotes(this.jwtToken).pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      );
    });
  }

}
