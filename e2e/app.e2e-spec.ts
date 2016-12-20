import { ComponentsEssentialsPage } from './app.po';

describe('components-essentials App', function() {
  let page: ComponentsEssentialsPage;

  beforeEach(() => {
    page = new ComponentsEssentialsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
