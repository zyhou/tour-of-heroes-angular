import { TourOfHeroesAngularPage } from './app.po';

describe('tour-of-heroes-angular App', function() {
  let page: TourOfHeroesAngularPage;

  beforeEach(() => {
    page = new TourOfHeroesAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
