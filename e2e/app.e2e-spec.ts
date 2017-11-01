import { MyNgBootstrapDatepickerAppPage } from './app.po';

describe('my-ng-bootstrap-datepicker-app App', () => {
  let page: MyNgBootstrapDatepickerAppPage;

  beforeEach(() => {
    page = new MyNgBootstrapDatepickerAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
