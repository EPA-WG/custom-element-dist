import {delay, http, HttpResponse} from 'msw'

import pokemonsMock from './pokemons.mock.ts';
import versions from './versions.mock.ts';

export const handlers =
[   http.get('/pokemon', ({ request }) =>
    {
        const url = new URL(request.url);
        const limit = url.searchParams.get('limit');
        const data = structuredClone(pokemonsMock);
        if( limit )
            data.results = data.results.slice(0,Number(limit))
        return HttpResponse.json(data); })
,   http.get('/noreturn', async () =>
    {
        await delay(500);
        // half second to be able to catch the initial state before the full data returned;
        return HttpResponse.json(pokemonsMock);
    })
,   http.get('/reflect', ({request}) =>
    {   const headers: Record<string, string> = {};
        [...request.headers.entries()].map(([key, val]) => headers[key] = 'reflected-'+val);
        headers['x-added'] = 'abc';
        return HttpResponse.json(pokemonsMock, {headers});
    })
,   http.get('/404', () =>
    {
        return new HttpResponse(null, {status: 404, statusText: 'not found'})
    })
,
];
// only for local
if( !window.location.pathname.startsWith('@epa-wg/custom-element-dist'))
    handlers.push(http.get('https://registry.npmjs.org/@epa-wg/custom-element-dist', async () =>
    {
        return HttpResponse.json(versions);
    }))