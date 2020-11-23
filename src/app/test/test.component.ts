import { Component, OnInit } from '@angular/core';
import { Test, TestService } from './test.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'taja-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  test: Observable<Test>;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.test = this.testService.getTest();
  }

}
