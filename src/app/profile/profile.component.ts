import { Component, OnInit } from '@angular/core';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  download = faDownload;
  briefcase = faBriefcase;
  graduation = faGraduationCap;
  constructor() { }

  ngOnInit(): void {
  }

}
