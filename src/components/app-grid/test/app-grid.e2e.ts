import { newE2EPage } from '@stencil/core/testing';

describe('app-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-grid></app-grid>');

    const element = await page.find('app-grid');
    expect(element).toHaveClass('hydrated');
  });
});
