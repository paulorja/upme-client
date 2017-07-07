import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsletterService {

  api_url = process.env.API_URL;

  constructor(private http: Http) { }

  add_newsletter(email) {
    return this.http.post(this.api_url + 'newsletter', {'email': email})
      .map(res => res.json());
  }

}
