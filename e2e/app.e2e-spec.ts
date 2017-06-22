import { UpmeClientPage } from './app.po';

describe('upme-client App', () => {
  let page: UpmeClientPage;

  beforeEach(() => {
    page = new UpmeClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
