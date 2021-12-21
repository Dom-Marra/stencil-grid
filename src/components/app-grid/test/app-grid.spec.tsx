import { newSpecPage } from '@stencil/core/testing';
import { AppGrid } from '../app-grid';

describe('app-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppGrid],
      html: `<app-grid></app-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <app-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-grid>
    `);
  });
});
