import { RetroBarGeneratorPage } from './app.po';

describe('retro-bar-generator App', () => {
  let page: RetroBarGeneratorPage;

  beforeEach(() => {
    page = new RetroBarGeneratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
