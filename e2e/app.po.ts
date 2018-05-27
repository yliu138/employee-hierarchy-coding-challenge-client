import { browser, element, by } from 'protractor';

export class EmployeeHierarchyClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getLocalEndpoint():string {
    return 'http://localhost:8080';
  }
}
