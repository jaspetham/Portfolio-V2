import { Component, OnInit } from '@angular/core';

import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faStickyNote} from '@fortawesome/free-solid-svg-icons'
import {faAddressBook} from '@fortawesome/free-solid-svg-icons'
import * as $ from 'jquery';

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
  contact = faAddressBook;
  
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('li.active').removeClass('active');
      $('a[href="' + location.pathname + '"]').closest('li').addClass('active'); 
    });
    
    $("[data-trigger]").on("click", function(){
      var trigger_id =  $(this).attr('data-trigger');
      $(trigger_id).toggleClass("show");
      $('body').toggleClass("offcanvas-active");
    });
    
    // close button 
    $(".btn-close").click(function(e){
        $(".navbar-collapse").removeClass("show");
        $("body").removeClass("offcanvas-active");
    }); 
  }

}
