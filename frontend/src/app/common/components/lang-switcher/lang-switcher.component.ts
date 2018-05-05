import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      console.log('LangSwitcherComponent');
  }

}
