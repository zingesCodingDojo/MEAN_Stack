import { DojoMallAssignmentPage } from './app.po';

describe('dojo-mall-assignment App', () => {
  let page: DojoMallAssignmentPage;

  beforeEach(() => {
    page = new DojoMallAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
