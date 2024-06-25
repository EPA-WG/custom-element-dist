import {expect, test}                  from 'vitest'
import {deepEqual, xml2dom, xmlString, obj2node, tagUid } from './custom-element/custom-element.js'

test('deepEqual', () =>
{
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual({}, null)).toBe(false);
    expect(deepEqual({a: 1}, {a: 1, b: 2})).toBe(false);
    expect(deepEqual({a: 1}, {a: 2})).toBe(false);
    expect(deepEqual({a: 1}, {a: 1})).toBe(true);
})
test('xml2dom', () =>
{
    const dom = xml2dom('<a/>');
    expect(dom.documentElement.localName).to.equal('a');
    expect(dom.documentElement.childNodes.length).to.equal(0);
    const xStr = xmlString(dom);
    expect(xStr).to.include('<a');
})
test('obj2node', () =>
{
    expect(obj2node(()=>{}      , 'f',document).outerHTML).to.equal('<f></f>'       );
    expect(obj2node(9           , 'a',document).outerHTML).to.equal('<a>9</a>'      );
    expect(obj2node('abc'       , 's',document).outerHTML).to.equal('<s>abc</s>'    );
    expect(obj2node({a:1,b:{c:'abc'}}       , 's',document).outerHTML).to.equal('<s a="1"><b c="abc"></b></s>');
})
