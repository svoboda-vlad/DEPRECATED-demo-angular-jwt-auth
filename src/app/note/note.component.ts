import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Note, NoteService } from './note.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'daja-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  notes$: Observable<Note[]> = null;
  error: Object = null;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
      this.notes$ = this.noteService.getNotes().pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      );
  }

}
