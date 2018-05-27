import { Response } from '@angular/http';
import { EmployeeHierarchyClientPage } from './app.po';
import { browser, by, element } from 'protractor';
// Mock module not yet supported in Angular V2+
// const mock = require('protractor-http-mock');
// This test depends upon the backend currently
describe('employee-hierarchy-client App', () => {
  let page: EmployeeHierarchyClientPage;

  beforeEach(() => {
    page = new EmployeeHierarchyClientPage();
  });

  it('should display message saying Employee Hierarchy', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Employee Hierarchy');
  });

  it('Should display the CEO node in tree structure ', () => {
    page.navigateTo();
    const ceoTab = element(by.css('.ceo'));
    expect(ceoTab.isPresent()).toBe(true);
  })

  it('Should display the manager node in tree structure ', () => {
    page.navigateTo();
    const managerTab = element(by.css('.normal-manager'));
    expect(managerTab.isPresent()).toBe(true);
  })

  it('Should display the leaf node in tree structure ', () => {
    page.navigateTo();
    const leafTab = element(by.css('.normal-leaf'));
    expect(leafTab.isPresent()).toBe(true);
  })
});
