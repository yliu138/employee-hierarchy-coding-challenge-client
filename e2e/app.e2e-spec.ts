import { EmployeeHierarchyClientPage } from './app.po';

describe('employee-hierarchy-client App', () => {
  let page: EmployeeHierarchyClientPage;

  beforeEach(() => {
    page = new EmployeeHierarchyClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
