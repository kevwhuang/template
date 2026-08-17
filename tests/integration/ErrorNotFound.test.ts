import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';

import ErrorNotFound from '../../src/sections/ErrorNotFound.astro';

describe('ErrorNotFound', () => {
    test('renders the labeled 404 section', async () => {
        const container = await AstroContainer.create();

        const html = await container.renderToString(ErrorNotFound);

        expect(html).toMatch(/<section[^>]*aria-labelledby="error-not-found-title"/);
        expect(html).toMatch(/<h1 id="error-not-found-title"[^>]*>\s*404\s*<\/h1>/);
    });
});
