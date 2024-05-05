import {delay, http, HttpResponse} from 'msw'

import pokemonsMock from './pokemons.mock.ts';

export const handlers =
[   http.get('/pokemon', ({ request }) =>
    {
        const url = new URL(request.url);
        const limit = url.searchParams.get('limit');
        const data = structuredClone(pokemonsMock);
        if( limit )
            data.results.slice(0,Number(limit))
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
,   http.get('/404', ({request}) =>
    {
        return new HttpResponse(null, {status: 404, statusText: 'not found'})   })
];
