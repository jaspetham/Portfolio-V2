import { Component, OnInit } from '@angular/core';

import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faStickyNote} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  home = faHome;
  user = faUser;
  briefcase = faBriefcase;
  envelope = faEnvelope;
  stickyNote = faStickyNote;
  constructor() { }

  ngOnInit(): void {
  }

}
