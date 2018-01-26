import { Injectable } from '@angular/core';
import { NumberFormatStyle } from '@angular/common/src/i18n/locale_data_api';
import { ElementList } from './element-list';
import { element } from 'protractor';


@Injectable()
export class AppService {
  static nextId = 0;
  list = new Array();

  selectedMenu = 'home';

  constructor() {}

  ajout(todo) {
    let element = new ElementList(AppService.nextId++, todo);
    this.list.push(element);
  }

  supprimer(todo) {
    this.list.splice(this.list.indexOf(todo), 1);
  }

  modifier(id, name) {
    this.list[id].name = name;
  }
}
