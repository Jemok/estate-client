import { EstateClientPage } from './app.po';

describe('estate-client App', () => {
  let page: EstateClientPage;

  beforeEach(() => {
    page = new EstateClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
