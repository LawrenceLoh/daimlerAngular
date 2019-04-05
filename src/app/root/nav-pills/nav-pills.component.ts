import {Component, OnInit} from '@angular/core';
import {NavigationItem} from './navigation-main-item';
import {NavigationSubItem} from './navigation-sub-item';

@Component({
  selector: 'app-nav-pills',
  templateUrl: './nav-pills.component.html',
  styleUrls: ['./nav-pills.component.scss']
})
export class NavPillsComponent implements OnInit {
  navPillItems: any;

  constructor() {
  }

  ngOnInit() {
    this.navPillItems = this.navigationItems();
  }

  private toggleMenu(selectedItem) {
    this.navPillItems
      .filter(item => item.label === selectedItem.label)
      .map(item => item.active = !item.active);
  }

  private toggleSubMenu(mainLabel, subLabel) {
    this.navPillItems.map(item => this.resetAllToFalse(item));
    this.navPillItems
      .filter(item => item.label === mainLabel)[0]
      .subList.map(subItem => subItem.label === subLabel ? subItem.active = true : subItem.active = false);
    console.log(this.navPillItems);
  }

  private resetAllToFalse(item) {
    if (item.active) {
      item.subList.forEach(subItem => subItem.active = false);
    }
  }

  private navigationItems(): any {
    const item = new NavigationItem();
    item.active = false;
    item.label = 'Static Data';

    const mock1 = new NavigationSubItem();
    mock1.active = false;
    mock1.link = '';
    mock1.label = 'test';

    const mock2 = new NavigationSubItem();
    mock2.active = false;
    mock2.link = '';
    mock2.label = 'test2';

    item.subList = [mock1, mock2];

    const item2 = new NavigationItem();
    item2.active = false;
    item2.label = 'Vehicle Data';

    const subItem1 = new NavigationSubItem();
    subItem1.active = false;
    subItem1.link = '';
    subItem1.label = 'Battery Retirement';

    const subItem2 = new NavigationSubItem();
    subItem2.active = false;
    subItem2.link = '';
    subItem2.label = 'Battery Recycle';

    item2.subList = [subItem1, subItem2];

    return [item, item2];

  }

}
