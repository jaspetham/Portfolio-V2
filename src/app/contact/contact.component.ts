import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquareAlt} from'@fortawesome/free-solid-svg-icons';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  envelope = faEnvelope;
  phone = faPhoneSquareAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
