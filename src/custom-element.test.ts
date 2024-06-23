import {expect, test}                  from 'vitest'
import {deepEqual, xml2dom, xmlString} from './custom-element/custom-element.js'

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
    debugger
    expect(dom.documentElement.localName).to.equal('a');
    expect(dom.documentElement.childNodes.length).to.equal(0);
    const xStr = xmlString(dom);
    expect(xStr).to.include('<a');
})
