import { KSSPage } from './app.po';

describe('kss App', () => {
  let page: KSSPage;

  beforeEach(() => {
    page = new KSSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
