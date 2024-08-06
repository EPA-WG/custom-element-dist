# custom-element-dist
Binary distribution for [@epa-wg/custom-element][git-url] with StoryBook and test coverage

`custom-element` [![git][github-image] GitHub][git-url]
| [tests project][git-test-url]
| [![NPM version][npm-image]][npm-url]
| [![coverage][coverage-image]][coverage-url]
| [StoryBook][sb-url]

# Content
[bin/build.sh] generates binaries to be kept as in Git release as in NPM package.
It serves the record of compliance on the moment of build.
## [dist](dist)
Can be used as CDN entry with minified bundle: [custom-element-bundle.js][bundle-url]

Each individual component of `custom-element` lib is available as hashed JS.

## [coverage](coverage)
Provides the unit test coverage for lib and StoryBooks

## [storybook-static][sb-url]
CDN version of StoryBook.

[git-url]:        https://github.com/EPA-WG/custom-element
[git-test-url]:   https://github.com/EPA-WG/custom-element-dist
[github-image]:   https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg
[npm-image]:      https://img.shields.io/npm/v/@epa-wg/custom-element-dist.svg
[npm-url]:        https://npmjs.org/package/@epa-wg/custom-element-dist
[coverage-image]: https://unpkg.com/@epa-wg/custom-element-dist@0.0.25/coverage/src/custom-element/coverage.svg
[coverage-url]:   https://unpkg.com/@epa-wg/custom-element-dist@0.0.25/coverage/src/custom-element/index.html
[sb-url]:         https://unpkg.com/@epa-wg/custom-element-dist@0.0.25/storybook-static/index.html
[bundle-url]:     https://unpkg.com/@epa-wg/custom-element-dist@0.0.25/dist/custom-element-bundle.js
