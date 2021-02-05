import { Component, OnInit } from '@angular/core';
import { LoginService, User } from '../login/login.service';
import { Note, NoteService } from './note.service';

@Component({
  selector: 'taja-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  jwtToken: string;
  notes: Note[];

  constructor(private loginService: LoginService, private noteService: NoteService) { }

  ngOnInit(): void {
    this.loginService.login(new User('user', 'password')).subscribe((res) => {
      this.jwtToken = res.headers.get('Authorization');
      this.noteService.getNotes(this.jwtToken).subscribe((notes: Note[]) => {
        if(notes.length == 0) {
          this.noteService.postNote(new Note('test' + Math.floor(Math.random() * 10).toString()), this.jwtToken).subscribe(() => {
            this.noteService.getNotes(this.jwtToken).subscribe((notes: Note[]) => {
              this.notes = notes;
            });
          });
        } else {
          this.notes = notes;
        }
      });
    });
  }

}
