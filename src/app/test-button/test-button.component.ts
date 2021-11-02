import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.css']
})
export class TestButtonComponent implements OnInit {

  name = 'Klik aku mas'

  constructor() { }

  ngOnInit(): void {
  }

}
