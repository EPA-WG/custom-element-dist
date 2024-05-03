import {delay, http, HttpResponse} from 'msw'

import pokemonsMock from './stories/pokemons.mock';

export const handlers =
[   http.get('/pokemon', () =>
    {
        console.log('================================ */api/v2/pokemon');
        return HttpResponse.json(pokemonsMock); })
,   http.get('/noreturn', async () =>
    {
        await delay(500);
        // half second to be able to catch the initial state before the full data returned;
        return HttpResponse.json(pokemonsMock);
    })
,   http.get('/reflect', ({request}) =>
    {   const headers: Record<string, string> = {};
        [...request.headers.entries()].map(([key, val]) => headers[key] = val);
        return HttpResponse.json(pokemonsMock, {headers});
    })
,   http.get('/404', ({request}) =>
    {
        return new HttpResponse(null, {status: 404, statusText: 'not found'})   })
];
