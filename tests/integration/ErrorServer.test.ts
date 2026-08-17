import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';

import ErrorServer from '../../src/sections/ErrorServer.astro';

describe('ErrorServer', () => {
    test('renders the labeled 500 section', async () => {
        const container = await AstroContainer.create();

        const html = await container.renderToString(ErrorServer);

        expect(html).toMatch(/<section[^>]*aria-labelledby="error-server-title"/);
        expect(html).toMatch(/<h1 id="error-server-title"[^>]*>\s*500\s*<\/h1>/);
    });
});
