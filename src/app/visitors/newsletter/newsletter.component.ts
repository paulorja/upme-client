import { Component, OnInit } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { NewsletterService } from './newsletter.service'

@Component({
  selector: 'newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  email: string;
  loading = false;
  error = null;
  success = null;
  
  constructor(private newsletter_service:NewsletterService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    this.newsletter_service.add_newsletter(this.email).subscribe(data => {
      this.reset_states();
      this.success = "Obrigada! Em breve mandamos notícias :)";
    }, error => {
      this.reset_states();
      try {
        var json_msg = JSON.parse(error._body);
        this.error = json_msg['message'];
      } catch (error) {
        this.error = "Erro inesperado."
      }
    });
  }

  reset_states() {
    this.success = null;
    this.loading = false;
    this.error = false;
  }

}
