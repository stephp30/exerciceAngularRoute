import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  listFooter = ['Legal Notice', 'Credits'];

  constructor(public appService: AppService) { }

  selectMenu(menu) {
    this.appService.selectedMenu = menu;
  }

  ngOnInit() {
  }

}
