import { Component, OnInit } from '@angular/core';
import { FormsModule }  from '@angular/forms';

@Component({
  selector: 'newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  email: string;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert(this.email);
  }

}
