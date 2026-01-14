export default {
    "_id": "@epa-wg/custom-element-dist",
    "_rev": "5-df363ab4a2b9c478c01e021bde4fbafe",
    "name": "@epa-wg/custom-element-dist",
    "dist-tags": {
        "latest": "0.0.36"
    },
    "versions": {
        "0.0.1": {
            "name": "@epa-wg/custom-element-dist",
            "version": "0.0.1",
            "keywords": [
                "WebComponent",
                "Declarative Custom Element",
                "XSLT",
                "JS",
                "javascript"
            ],
            "author": {
                "url": "https://blog.firsov.net/",
                "name": "Sasha Firsov",
                "email": "suns@simulationworks.com"
            },
            "license": "Apache-2.0",
            "_id": "@epa-wg/custom-element-dist@0.0.1",
            "maintainers": [
                {
                    "name": "sasha-firsov",
                    "email": "suns@simulationworks.com"
                }
            ],
            "homepage": "https://github.com/EPA-WG/custom-element#readme",
            "bugs": {
                "url": "https://github.com/EPA-WG/custom-element/issues"
            },
            "msw": {
                "workerDirectory": [
                    "public"
                ]
            },
            "dist": {
                "shasum": "161127f2bf1542178566db48bbb1a027ba7f7934",
                "tarball": "https://registry.npmjs.org/@epa-wg/custom-element-dist/-/custom-element-dist-0.0.1.tgz",
                "fileCount": 284,
                "integrity": "sha512-jTBBjhQClcRgF5GqI8+uYkNW6gkTjEjrolMU2JHQGplZI0Kwie3WrYeVuJA4uLuPWl8+Wl1o4YzhNP+sAJ31hw==",
                "signatures": [
                    {
                        "sig": "MEYCIQD492KdwBTQ5oKCJujOfPhUYeK6RgU8Kz08LIq0WwMZcQIhANM9RsGaJxzuRQ/B37c7M38u8UTKYbUFGNDC8AtKqGZu",
                        "keyid": "SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA"
                    }
                ],
                "unpackedSize": 8914279
            },
            "type": "module",
            "exports": {
                ".": {
                    "import": "./dist/assets/custom-element-bundle.js",
                    "require": "./dist/assets/custom-element-bundle.cjs"
                },
                "./package.json": "./package.json",
                "./custom-element": {
                    "import": "./dist/assets/custom-element-bundle.js",
                    "require": "./dist/assets/custom-element-bundle.cjs"
                }
            },
            "funding": {
                "url": "https://www.patreon.com/sashafirsov",
                "type": "patreon"
            },
            "gitHead": "85c02d4d1615a6290c4c17ba941d8847249f2a73",
            "scripts": {
                "t": "vitest --no-file-parallelism --watch=false src/stories/location-element.test.ts",
                "sb": "yarn storybook",
                "dev": "vite",
                "test": "vitest --coverage.enabled --coverage.all --no-file-parallelism --watch=false",
                "build": "tsc && vite build",
                "preview": "vite preview",
                "storybook": "storybook dev -p 6006",
                "test:watch": "vitest --inspect-brk --no-file-parallelism --browser.headless=false --test-timeout=0",
                "postinstall": "bash bin/postinstall.sh",
                "prepublishOnly": "bash bin/build.sh",
                "test:storybook": "test-storybook",
                "build-storybook": "storybook build"
            },
            "_npmUser": {
                "name": "sasha-firsov",
                "email": "suns@simulationworks.com"
            },
            "web-types": [
                "./src/custom-element/ide/web-types-dce.json",
                "./src/custom-element/ide/web-types-xsl.json"
            ],
            "repository": {
                "url": "git+https://github.com/EPA-WG/custom-element-dist.git",
                "type": "git"
            },
            "_npmVersion": "10.1.0",
            "description": "Binary distribution for [@epa-wg/custom-element][git-url] with StoryBook and test coverage",
            "directories": {},
            "_nodeVersion": "20.8.1",
            "dependencies": {
                "@epa-wg/custom-element": "0.0.20"
            },
            "_hasShrinkwrap": false,
            "devDependencies": {
                "lit": "^3.1.3",
                "msw": "^2.2.14",
                "vite": "^5.2.0",
                "vitest": "^1.6.0",
                "storybook": "^8.0.10",
                "playwright": "^1.43.1",
                "typescript": "^5.2.2",
                "webdriverio": "^8.36.1",
                "coverage-svg": "^0.0.3",
                "@storybook/test": "^8.0.10",
                "@vitest/browser": "^1.6.0",
                "@storybook/blocks": "^8.0.10",
                "msw-storybook-addon": "^2.0.0",
                "@storybook/addon-links": "^8.0.10",
                "@storybook/test-runner": "^0.17.0",
                "@chromatic-com/storybook": "^1.3.3",
                "@storybook/addon-mdx-gfm": "8.0.10",
                "@storybook/web-components": "^8.0.10",
                "@vitest/coverage-istanbul": "^1.6.0",
                "@storybook/addon-essentials": "^8.0.10",
                "@storybook/addon-interactions": "^8.0.10",
                "@storybook/web-components-vite": "^8.0.10"
            },
            "_npmOperationalInternal": {
                "tmp": "tmp/custom-element-dist_0.0.1_1715578030506_0.27588957883085974",
                "host": "s3://npm-registry-packages"
            }
        },
        "0.0.21": {
            "name": "@epa-wg/custom-element-dist",
            "version": "0.0.21",
            "keywords": [
                "WebComponent",
                "Declarative Custom Element",
                "XSLT",
                "JS",
                "javascript"
            ],
            "author": {
                "url": "https://blog.firsov.net/",
                "name": "Sasha Firsov",
                "email": "suns@simulationworks.com"
            },
            "license": "Apache-2.0",
            "_id": "@epa-wg/custom-element-dist@0.0.21",
            "maintainers": [
                {
                    "name": "sasha-firsov",
                    "email": "suns@simulationworks.com"
                }
            ],
            "homepage": "https://github.com/EPA-WG/custom-element#readme",
            "bugs": {
                "url": "https://github.com/EPA-WG/custom-element/issues"
            },
            "msw": {
                "workerDirectory": [
                    "public"
                ]
            },
            "dist": {
                "shasum": "ae369434d0d1e91d75cdf7058dc11bea06948b0b",
                "tarball": "https://registry.npmjs.org/@epa-wg/custom-element-dist/-/custom-element-dist-0.0.21.tgz",
                "fileCount": 284,
                "integrity": "sha512-D8QHHebPInF54cdPt/iodLvj9jJ0x0ymQAiixozJEF6F+RpYfB2pP0Th7a7MYtmiNz7ZwVvFt3gPKYOHJr0Zbw==",
                "signatures": [
                    {
                        "sig": "MEUCIQCm0p45iVWRKqgrbRIWxSMWriqPQWyD+put0xpa2HNa1QIgTNiSZ8D/FkeRR+qSBmBmZZcCZPy/eUqAu54v2Y/dNtQ=",
                        "keyid": "SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA"
                    }
                ],
                "unpackedSize": 8914288
            },
            "type": "module",
            "exports": {
                ".": {
                    "import": "./dist/assets/custom-element-bundle.js",
                    "require": "./dist/assets/custom-element-bundle.cjs"
                },
                "./package.json": "./package.json",
                "./custom-element": {
                    "import": "./dist/assets/custom-element-bundle.js",
                    "require": "./dist/assets/custom-element-bundle.cjs"
                }
            },
            "funding": {
                "url": "https://www.patreon.com/sashafirsov",
                "type": "patreon"
            },
            "gitHead": "4dacc9d66e328bebac2aac96c7671f0dca5d33ac",
            "scripts": {
                "t": "vitest --no-file-parallelism --watch=false src/stories/location-element.test.ts",
                "sb": "yarn storybook",
                "dev": "vite",
                "test": "vitest --coverage.enabled --coverage.all --no-file-parallelism --watch=false",
                "build": "tsc && vite build",
                "preview": "vite preview",
                "storybook": "storybook dev -p 6006",
                "test:watch": "vitest --inspect-brk --no-file-parallelism --browser.headless=false --test-timeout=0",
                "postinstall": "bash bin/postinstall.sh",
                "prepublishOnly": "bash bin/build.sh",
                "test:storybook": "test-storybook",
                "build-storybook": "storybook build"
            },
            "_npmUser": {
                "name": "sasha-firsov",
                "email": "suns@simulationworks.com"
            },
            "web-types": [
                "./src/custom-element/ide/web-types-dce.json",
                "./src/custom-element/ide/web-types-xsl.json"
            ],
            "repository": {
                "url": "git+https://github.com/EPA-WG/custom-element-dist.git",
                "type": "git"
            },
            "_npmVersion": "10.1.0",
            "description": "Binary distribution for [@epa-wg/custom-element][git-url] with StoryBook and test coverage",
            "directories": {},
            "_nodeVersion": "20.8.1",
            "dependencies": {
                "@epa-wg/custom-element": "0.0.21"
            },
            "_hasShrinkwrap": false,
            "devDependencies": {
                "lit": "^3.1.3",
                "msw": "^2.2.14",
                "vite": "^5.2.0",
                "vitest": "^1.6.0",
                "storybook": "^8.0.10",
                "playwright": "^1.43.1",
                "typescript": "^5.2.2",
                "webdriverio": "^8.36.1",
                "coverage-svg": "^0.0.3",
                "@storybook/test": "^8.0.10",
                "@vitest/browser": "^1.6.0",
                "@storybook/blocks": "^8.0.10",
                "msw-storybook-addon": "^2.0.0",
                "@storybook/addon-links": "^8.0.10",
                "@storybook/test-runner": "^0.17.0",
                "@chromatic-com/storybook": "^1.3.3",
                "@storybook/addon-mdx-gfm": "8.0.10",
                "@storybook/web-components": "^8.0.10",
                "@vitest/coverage-istanbul": "^1.6.0",
                "@storybook/addon-essentials": "^8.0.10",
                "@storybook/addon-interactions": "^8.0.10",
                "@storybook/web-components-vite": "^8.0.10"
            },
            "_npmOperationalInternal": {
                "tmp": "tmp/custom-element-dist_0.0.21_1715580074337_0.4062954016656166",
                "host": "s3://npm-registry-packages"
            }
        },
        "0.0.22": {
            "name": "@epa-wg/custom-element-dist",
            "version": "0.0.22",
            "keywords": [
                "WebComponent",
                "Declarative Custom Element",
                "XSLT",
                "JS",
                "javascript"
            ],
            "author": {
                "url": "https://blog.firsov.net/",
                "name": "Sasha Firsov",
                "email": "suns@simulationworks.com"
            },
            "license": "Apache-2.0",
            "_id": "@epa-wg/custom-element-dist@0.0.22",
            "homepage": "https://github.com/EPA-WG/custom-element#readme",
            "bugs": {
                "url": "https://github.com/EPA-WG/custom-element/issues"
            },
            "msw": {
                "workerDirectory": [
                    "public"
                ]
            },
            "dist": {
                "shasum": "5654ef0e06c4a2f4bc8657f9bf68becd96658185",
                "tarball": "https://registry.npmjs.org/@epa-wg/custom-element-dist/-/custom-element-dist-0.0.22.tgz",
                "fileCount": 297,
                "integrity": "sha512-GZCpXqUpw0em3cJQBFzslNMZ2NT+4iE7qTGTMuSQbYpv64O2sYD7Ako2NLfaxqV5CvpG9+wuUZBz61bhsV3Icw==",
                "signatures": [
                    {
                        "sig": "MEUCIQDxUQZIiLj+edd8dAvZxLQPD0CheOWyhq8ualBZYlSBeAIgOJ8jOcuW15+576FWBcP4Ocm6mTza8Q1j4LKyigIdLAY=",
                        "keyid": "SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA"
                    }
                ],
                "unpackedSize": 9922734
            },
            "type": "module",
            "exports": {
                ".": {
                    "import": "./dist/assets/custom-element-bundle.js",
                    "require": "./dist/assets/custom-element-bundle.cjs"
                },
                "./package.json": "./package.json",
                "./custom-element": {
                    "import": "./dist/assets/custom-element-bundle.js",
                    "require": "./dist/assets/custom-element-bundle.cjs"
                }
            },
            "funding": {
                "url": "https://www.patreon.com/sashafirsov",
                "type": "patreon"
            },
            "gitHead": "98694b5a42508e316bf35a8bbdbddf66a8daaff9",
            "scripts": {
                "t": "vitest --no-file-parallelism --watch --browser.headless=false src/stories/slots.test.stories.ts",
                "sb": "yarn storybook",
                "dev": "vite",
                "test": "vitest --coverage.enabled --coverage.all --no-file-parallelism --watch=false",
                "build": "tsc && vite build",
                "preview": "vite preview",
                "storybook": "storybook dev -p 6006",
                "test:watch": "vitest --inspect-brk --no-file-parallelism --browser.headless=false --test-timeout=0",
                "postinstall": "bash bin/postinstall.sh",
                "prepublishOnly": "bash bin/build.sh",
                "test:storybook": "test-storybook",
                "build-storybook": "storybook build"
            },
            "_npmUser": {
                "name": "sasha-firsov",
                "email": "suns@simulationworks.com"
            },
            "web-types": [
                "./src/custom-element/ide/web-types-dce.json",
                "./src/custom-element/ide/web-types-xsl.json"
            ],
            "repository": {
                "url": "git+https://github.com/EPA-WG/custom-element-dist.git",
                "type": "git"
            },
            "_npmVersion": "10.1.0",
            "description": "Binary distribution for [@epa-wg/custom-element][git-url] with StoryBook and test coverage",
            "directories": {},
            "_nodeVersion": "20.8.1",
            "dependencies": {
                "@epa-wg/custom-element": "0.0.22"
            },
            "_hasShrinkwrap": false,
            "devDependencies": {
                "lit": "^3.1.3",
                "msw": "^2.2.14",
                "vite": "^5.3.1",
                "vitest": "^1.6.0",
                "storybook": "^8.0.10",
                "playwright": "^1.43.1",
                "typescript": "^5.2.2",
                "webdriverio": "^8.36.1",
                "coverage-svg": "^0.0.3",
                "@storybook/test": "^8.0.10",
                "@vitest/browser": "^1.6.0",
                "@storybook/blocks": "^8.0.10",
                "msw-storybook-addon": "^2.0.0",
                "@storybook/addon-links": "^8.0.10",
                "@storybook/test-runner": "^0.17.0",
                "@chromatic-com/storybook": "^1.3.3",
                "@storybook/addon-mdx-gfm": "8.0.10",
                "@storybook/web-components": "^8.0.10",
                "@vitest/coverage-istanbul": "^1.6.0",
                "@storybook/addon-essentials": "^8.0.10",
                "@storybook/addon-interactions": "^8.0.10",
                "@storybook/web-components-vite": "^8.0.10"
            },
            "_npmOperationalInternal": {
                "tmp": "tmp/custom-element-dist_0.0.22_1719287752206_0.5878013133540891",
                "host": "s3://npm-registry-packages"
            }
        },
        "0.0.23": {
            "name": "@epa-wg/custom-element-dist",
            "version": "0.0.23",
            "keywords": [
                "WebComponent",
                "Declarative Custom Element",
                "XSLT",
                "JS",
                "javascript"
            ],
            "author": {
                "url": "https://blog.firsov.net/",
                "name": "Sasha Firsov",
                "email": "suns@simulationworks.com"
            },
            "license": "Apache-2.0",
            "_id": "@epa-wg/custom-element-dist@0.0.23",
            "homepage": "https://github.com/EPA-WG/custom-element#readme",
            "bugs": {
                "url": "https://github.com/EPA-WG/custom-element/issues"
            },
            "msw": {
                "workerDirectory": [
                    "public"
                ]
            },
            "dist": {
                "shasum": "e54f3f38d8f709d03ae03f34fd57afd1af30aa4d",
                "tarball": "https://registry.npmjs.org/@epa-wg/custom-element-dist/-/custom-element-dist-0.0.23.tgz",
                "fileCount": 347,
                "integrity": "sha512-YyCgqZ1qsOgMB80zW0GJSFoWLJQnrzcCCf71mITP5a0iS/jJdvS8Itd9TVfATVqiDSyl7n8ZPWD2DVcwYYC8AA==",
                "signatures": [
                    {
                        "sig": "MEQCIEeSlXnm5Mqwjste803lQPC7klLeaHMF2QL4H9oNuTkuAiBhnith5X/GNhwe2NjFRKZ3frip+UnoImD35YA4oHr3UA==",
                        "keyid": "SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA"
                    }
                ],
                "unpackedSize": 9805859
            },
            "type": "module",
            "exports": {
                ".": {
                    "import": "./dist/assets/custom-element-bundle.js",
                    "require": "./dist/assets/custom-element-bundle.cjs"
                },
                "./package.json": "./package.json",
                "./custom-element": {
                    "import": "./dist/assets/custom-element-bundle.js",
                    "require": "./dist/assets/custom-element-bundle.cjs"
                }
            },
            "funding": {
                "url": "https://www.patreon.com/sashafirsov",
                "type": "patreon"
            },
            "scripts": {
                "t": "vitest --no-file-parallelism --watch --browser.headless=false src/stories/attributes.test.stories.ts",
                "sb": "yarn storybook",
                "dev": "vite",
                "test": "vitest --coverage.enabled --coverage.all --no-file-parallelism --watch=false",
                "build": "tsc && vite build",
                "preview": "vite preview",
                "storybook": "storybook dev -p 6006",
                "test:watch": "vitest --inspect-brk --no-file-parallelism --browser.headless=false --test-timeout=0",
                "postinstall": "bash bin/postinstall.sh",
                "prepublishOnly": "bash bin/build.sh",
                "test:storybook": "test-storybook",
                "build-storybook": "storybook build"
            },
            "_npmUser": {
                "name": "sasha-firsov",
                "email": "suns@simulationworks.com"
            },
            "web-types": [
                "./src/custom-element/ide/web-types-dce.json",
                "./src/custom-element/ide/web-types-xsl.json"
            ],
            "repository": {
                "url": "https://github.com/EPA-WG/custom-element-dist.git",
                "type": "git"
            },
            "description": "Binary distribution for [@epa-wg/custom-element][git-url] with StoryBook and test coverage",
            "directories": {},
            "licenseText": "                                 Apache License\n                           Version 2.0, January 2004\n                        http://www.apache.org/licenses/\n\n   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\n\n   1. Definitions.\n\n      \"License\" shall mean the terms and conditions for use, reproduction,\n      and distribution as defined by Sections 1 through 9 of this document.\n\n      \"Licensor\" shall mean the copyright owner or entity authorized by\n      the copyright owner that is granting the License.\n\n      \"Legal Entity\" shall mean the union of the acting entity and all\n      other entities that control, are controlled by, or are under common\n      control with that entity. For the purposes of this definition,\n      \"control\" means (i) the power, direct or indirect, to cause the\n      direction or management of such entity, whether by contract or\n      otherwise, or (ii) ownership of fifty percent (50%) or more of the\n      outstanding shares, or (iii) beneficial ownership of such entity.\n\n      \"You\" (or \"Your\") shall mean an individual or Legal Entity\n      exercising permissions granted by this License.\n\n      \"Source\" form shall mean the preferred form for making modifications,\n      including but not limited to software source code, documentation\n      source, and configuration files.\n\n      \"Object\" form shall mean any form resulting from mechanical\n      transformation or translation of a Source form, including but\n      not limited to compiled object code, generated documentation,\n      and conversions to other media types.\n\n      \"Work\" shall mean the work of authorship, whether in Source or\n      Object form, made available under the License, as indicated by a\n      copyright notice that is included in or attached to the work\n      (an example is provided in the Appendix below).\n\n      \"Derivative Works\" shall mean any work, whether in Source or Object\n      form, that is based on (or derived from) the Work and for which the\n      editorial revisions, annotations, elaborations, or other modifications\n      represent, as a whole, an original work of authorship. For the purposes\n      of this License, Derivative Works shall not include works that remain\n      separable from, or merely link (or bind by name) to the interfaces of,\n      the Work and Derivative Works thereof.\n\n      \"Contribution\" shall mean any work of authorship, including\n      the original version of the Work and any modifications or additions\n      to that Work or Derivative Works thereof, that is intentionally\n      submitted to Licensor for inclusion in the Work by the copyright owner\n      or by an individual or Legal Entity authorized to submit on behalf of\n      the copyright owner. For the purposes of this definition, \"submitted\"\n      means any form of electronic, verbal, or written communication sent\n      to the Licensor or its representatives, including but not limited to\n      communication on electronic mailing lists, source code control systems,\n      and issue tracking systems that are managed by, or on behalf of, the\n      Licensor for the purpose of discussing and improving the Work, but\n      excluding communication that is conspicuously marked or otherwise\n      designated in writing by the copyright owner as \"Not a Contribution.\"\n\n      \"Contributor\" shall mean Licensor and any individual or Legal Entity\n      on behalf of whom a Contribution has been received by Licensor and\n      subsequently incorporated within the Work.\n\n   2. Grant of Copyright License. Subject to the terms and conditions of\n      this License, each Contributor hereby grants to You a perpetual,\n      worldwide, non-exclusive, no-charge, royalty-free, irrevocable\n      copyright license to reproduce, prepare Derivative Works of,\n      publicly display, publicly perform, sublicense, and distribute the\n      Work and such Derivative Works in Source or Object form.\n\n   3. Grant of Patent License. Subject to the terms and conditions of\n      this License, each Contributor hereby grants to You a perpetual,\n      worldwide, non-exclusive, no-charge, royalty-free, irrevocable\n      (except as stated in this section) patent license to make, have made,\n      use, offer to sell, sell, import, and otherwise transfer the Work,\n      where such license applies only to those patent claims licensable\n      by such Contributor that are necessarily infringed by their\n      Contribution(s) alone or by combination of their Contribution(s)\n      with the Work to which such Contribution(s) was submitted. If You\n      institute patent litigation against any entity (including a\n      cross-claim or counterclaim in a lawsuit) alleging that the Work\n      or a Contribution incorporated within the Work constitutes direct\n      or contributory patent infringement, then any patent licenses\n      granted to You under this License for that Work shall terminate\n      as of the date such litigation is filed.\n\n   4. Redistribution. You may reproduce and distribute copies of the\n      Work or Derivative Works thereof in any medium, with or without\n      modifications, and in Source or Object form, provided that You\n      meet the following conditions:\n\n      (a) You must give any other recipients of the Work or\n          Derivative Works a copy of this License; and\n\n      (b) You must cause any modified files to carry prominent notices\n          stating that You changed the files; and\n\n      (c) You must retain, in the Source form of any Derivative Works\n          that You distribute, all copyright, patent, trademark, and\n          attribution notices from the Source form of the Work,\n          excluding those notices that do not pertain to any part of\n          the Derivative Works; and\n\n      (d) If the Work includes a \"NOTICE\" text file as part of its\n          distribution, then any Derivative Works that You distribute must\n          include a readable copy of the attribution notices contained\n          within such NOTICE file, excluding those notices that do not\n          pertain to any part of the Derivative Works, in at least one\n          of the following places: within a NOTICE text file distributed\n          as part of the Derivative Works; within the Source form or\n          documentation, if provided along with the Derivative Works; or,\n          within a display generated by the Derivative Works, if and\n          wherever such third-party notices normally appear. The contents\n          of the NOTICE file are for informational purposes only and\n          do not modify the License. You may add Your own attribution\n          notices within Derivative Works that You distribute, alongside\n          or as an addendum to the NOTICE text from the Work, provided\n          that such additional attribution notices cannot be construed\n          as modifying the License.\n\n      You may add Your own copyright statement to Your modifications and\n      may provide additional or different license terms and conditions\n      for use, reproduction, or distribution of Your modifications, or\n      for any such Derivative Works as a whole, provided Your use,\n      reproduction, and distribution of the Work otherwise complies with\n      the conditions stated in this License.\n\n   5. Submission of Contributions. Unless You explicitly state otherwise,\n      any Contribution intentionally submitted for inclusion in the Work\n      by You to the Licensor shall be under the terms and conditions of\n      this License, without any additional terms or conditions.\n      Notwithstanding the above, nothing herein shall supersede or modify\n      the terms of any separate license agreement you may have executed\n      with Licensor regarding such Contributions.\n\n   6. Trademarks. This License does not grant permission to use the trade\n      names, trademarks, service marks, or product names of the Licensor,\n      except as required for reasonable and customary use in describing the\n      origin of the Work and reproducing the content of the NOTICE file.\n\n   7. Disclaimer of Warranty. Unless required by applicable law or\n      agreed to in writing, Licensor provides the Work (and each\n      Contributor provides its Contributions) on an \"AS IS\" BASIS,\n      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n      implied, including, without limitation, any warranties or conditions\n      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\n      PARTICULAR PURPOSE. You are solely responsible for determining the\n      appropriateness of using or redistributing the Work and assume any\n      risks associated with Your exercise of permissions under this License.\n\n   8. Limitation of Liability. In no event and under no legal theory,\n      whether in tort (including negligence), contract, or otherwise,\n      unless required by applicable law (such as deliberate and grossly\n      negligent acts) or agreed to in writing, shall any Contributor be\n      liable to You for damages, including any direct, indirect, special,\n      incidental, or consequential damages of any character arising as a\n      result of this License or out of the use or inability to use the\n      Work (including but not limited to damages for loss of goodwill,\n      work stoppage, computer failure or malfunction, or any and all\n      other commercial damages or losses), even if such Contributor\n      has been advised of the possibility of such damages.\n\n   9. Accepting Warranty or Additional Liability. While redistributing\n      the Work or Derivative Works thereof, You may choose to offer,\n      and charge a fee for, acceptance of support, warranty, indemnity,\n      or other liability obligations and/or rights consistent with this\n      License. However, in accepting such obligations, You may act only\n      on Your own behalf and on Your sole responsibility, not on behalf\n      of any other Contributor, and only if You agree to indemnify,\n      defend, and hold each Contributor harmless for any liability\n      incurred by, or claims asserted against, such Contributor by reason\n      of your accepting any such warranty or additional liability.\n\n   END OF TERMS AND CONDITIONS\n\n   APPENDIX: How to apply the Apache License to your work.\n\n      To apply the Apache License to your work, attach the following\n      boilerplate notice, with the fields enclosed by brackets \"[]\"\n      replaced with your own identifying information. (Don't include\n      the brackets!)  The text should be enclosed in the appropriate\n      comment syntax for the file format. We also recommend that a\n      file or class name and description of purpose be included on the\n      same \"printed page\" as the copyright notice for easier\n      identification within third-party archives.\n\n   Copyright [yyyy] [name of copyright owner]\n\n   Licensed under the Apache License, Version 2.0 (the \"License\");\n   you may not use this file except in compliance with the License.\n   You may obtain a copy of the License at\n\n       http://www.apache.org/licenses/LICENSE-2.0\n\n   Unless required by applicable law or agreed to in writing, software\n   distributed under the License is distributed on an \"AS IS\" BASIS,\n   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n   See the License for the specific language governing permissions and\n   limitations under the License.\n",
            "dependencies": {
                "@epa-wg/custom-element": "0.0.23"
            },
            "_hasShrinkwrap": false,
            "devDependencies": {
                "lit": "^3.1.3",
                "msw": "^2.2.14",
                "vite": "^5.3.1",
                "vitest": "^1.6.0",
                "storybook": "^8.0.10",
                "playwright": "^1.43.1",
                "typescript": "^5.2.2",
                "webdriverio": "^8.36.1",
                "coverage-svg": "^0.0.3",
                "@storybook/test": "^8.0.10",
                "@vitest/browser": "^1.6.0",
                "@storybook/blocks": "^8.0.10",
                "msw-storybook-addon": "^2.0.0",
                "@storybook/addon-links": "^8.0.10",
                "@storybook/test-runner": "^0.17.0",
                "@chromatic-com/storybook": "^1.3.3",
                "@storybook/addon-mdx-gfm": "8.0.10",
                "@storybook/web-components": "^8.0.10",
                "@vitest/coverage-istanbul": "^1.6.0",
                "@storybook/addon-essentials": "^8.0.10",
                "@storybook/addon-interactions": "^8.0.10",
                "@storybook/web-components-vite": "^8.0.10"
            },
            "_npmOperationalInternal": {
                "tmp": "tmp/custom-element-dist_0.0.23_1719458714023_0.8754234815431452",
                "host": "s3://npm-registry-packages"
            }
        },
        "0.0.24": {
            "name": "@epa-wg/custom-element-dist",
            "version": "0.0.24",
            "keywords": [
                "WebComponent",
                "Declarative Custom Element",
                "XSLT",
                "JS",
                "javascript"
            ],
            "author": {
                "url": "https://blog.firsov.net/",
                "name": "Sasha Firsov",
                "email": "suns@simulationworks.com"
            },
            "license": "Apache-2.0",
            "_id": "@epa-wg/custom-element-dist@0.0.24",
            "maintainers": [
                {
                    "name": "sasha-firsov",
                    "email": "suns@simulationworks.com"
                }
            ],
            "homepage": "https://github.com/EPA-WG/custom-element#readme",
            "bugs": {
                "url": "https://github.com/EPA-WG/custom-element/issues"
            },
            "msw": {
                "workerDirectory": [
                    "public"
                ]
            },
            "dist": {
                "shasum": "645c47e1a5ee0a68ff68480f0d7216118f25baa0",
                "tarball": "https://registry.npmjs.org/@epa-wg/custom-element-dist/-/custom-element-dist-0.0.24.tgz",
                "fileCount": 288,
                "integrity": "sha512-AB9SEmKFLm9xa9C1TW8i+EnVF1/4FuJMArOSLlDcOapqQlGzuezAi+P+GYr5JEyRNV7z2vpfSqCNw27pP+F9gw==",
                "signatures": [
                    {
                        "sig": "MEUCIQDDj/lGs/Jk7sID8gIbOU06BXxk9A2KlnHPkAblbWVZjQIgHHanSMQmi3OZlW7E2opqTBykCsjCL6Vre+elfaa81Bg=",
                        "keyid": "SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA"
                    }
                ],
                "unpackedSize": 9345698
            },
            "type": "module",
            "exports": {
                ".": {
                    "import": "./dist/assets/custom-element-bundle.js",
                    "require": "./dist/assets/custom-element-bundle.cjs"
                },
                "./package.json": "./package.json",
                "./custom-element": {
                    "import": "./dist/assets/custom-element-bundle.js",
                    "require": "./dist/assets/custom-element-bundle.cjs"
                }
            },
            "funding": {
                "url": "https://www.patreon.com/sashafirsov",
                "type": "patreon"
            },
            "gitHead": "de84506c8f2b0100071b3ef9a02eae83f965e72d",
            "scripts": {
                "t": "vitest --no-file-parallelism --watch --browser.headless=false src/stories/attributes.test.stories.ts",
                "sb": "yarn storybook",
                "dev": "vite",
                "test": "vitest --coverage.enabled --coverage.all --no-file-parallelism --watch=false",
                "build": "tsc && vite build",
                "preview": "vite preview",
                "storybook": "storybook dev -p 6006",
                "test:watch": "vitest --inspect-brk --no-file-parallelism --browser.headless=false --test-timeout=0",
                "postinstall": "bash bin/postinstall.sh",
                "prepublishOnly": "bash bin/build.sh",
                "test:storybook": "test-storybook",
                "build-storybook": "storybook build"
            },
            "_npmUser": {
                "name": "sasha-firsov",
                "email": "suns@simulationworks.com"
            },
            "web-types": [
                "./src/custom-element/ide/web-types-dce.json",
                "./src/custom-element/ide/web-types-xsl.json"
            ],
            "repository": {
                "url": "git+https://github.com/EPA-WG/custom-element-dist.git",
                "type": "git"
            },
            "_npmVersion": "10.1.0",
            "description": "Binary distribution for [@epa-wg/custom-element][git-url] with StoryBook and test coverage",
            "directories": {},
            "_nodeVersion": "20.8.1",
            "dependencies": {
                "@epa-wg/custom-element": "0.0.24"
            },
            "_hasShrinkwrap": false,
            "devDependencies": {
                "lit": "^3.1.3",
                "msw": "^2.2.14",
                "vite": "^5.3.1",
                "vitest": "^1.6.0",
                "storybook": "^8.0.10",
                "playwright": "^1.43.1",
                "typescript": "^5.2.2",
                "webdriverio": "^8.36.1",
                "coverage-svg": "^0.0.3",
                "@storybook/test": "^8.0.10",
                "@vitest/browser": "^1.6.0",
                "@storybook/blocks": "^8.0.10",
                "msw-storybook-addon": "^2.0.0",
                "@storybook/addon-links": "^8.0.10",
                "@storybook/test-runner": "^0.17.0",
                "@chromatic-com/storybook": "^1.3.3",
                "@storybook/addon-mdx-gfm": "8.0.10",
                "@storybook/web-components": "^8.0.10",
                "@vitest/coverage-istanbul": "^1.6.0",
                "@storybook/addon-essentials": "^8.0.10",
                "@storybook/addon-interactions": "^8.0.10",
                "@storybook/web-components-vite": "^8.0.10"
            },
            "_npmOperationalInternal": {
                "tmp": "tmp/custom-element-dist_0.0.24_1721617812280_0.9341875013148964",
                "host": "s3://npm-registry-packages"
            }
        },
        "0.0.31": {
            "name": "@epa-wg/custom-element-dist",
            "version": "0.0.31",
            "type": "module",
            "scripts": {
                "dev": "vite",
                "build": "tsc && vite build",
                "postinstall": "bash bin/postinstall.sh",
                "prepublishOnly": "bash bin/build.sh",
                "preview": "vite preview",
                "storybook": "storybook dev -p 6006",
                "build-storybook": "storybook build",
                "test": "vitest --coverage.enabled --coverage.all --no-file-parallelism --watch=false",
                "test:watch": "vitest --inspect-brk --no-file-parallelism --browser.headless=false --test-timeout=0",
                "test:storybook": "test-storybook",
                "sb": "yarn storybook",
                "t": "vitest --no-file-parallelism --watch --browser.headless=false src/stories/attributes.test.stories.ts"
            },
            "dependencies": {
                "@epa-wg/custom-element": "0.0.31"
            },
            "devDependencies": {
                "@chromatic-com/storybook": "^1.3.3",
                "@storybook/addon-essentials": "^8.0.10",
                "@storybook/addon-interactions": "^8.0.10",
                "@storybook/addon-links": "^8.0.10",
                "@storybook/addon-mdx-gfm": "8.0.10",
                "@storybook/blocks": "^8.0.10",
                "@storybook/test": "^8.0.10",
                "@storybook/test-runner": "^0.17.0",
                "@storybook/web-components": "^8.0.10",
                "@storybook/web-components-vite": "^8.0.10",
                "@vitest/browser": "^1.6.0",
                "@vitest/coverage-istanbul": "^1.6.0",
                "coverage-svg": "^0.0.3",
                "lit": "^3.1.3",
                "msw": "^2.2.14",
                "msw-storybook-addon": "^2.0.0",
                "playwright": "^1.43.1",
                "storybook": "^8.0.10",
                "typescript": "^5.2.2",
                "vite": "^5.3.1",
                "vitest": "^1.6.0",
                "webdriverio": "^8.36.1"
            },
            "msw": {
                "workerDirectory": [
                    "public"
                ]
            },
            "keywords": [
                "WebComponent",
                "Declarative Custom Element",
                "XSLT",
                "JS",
                "javascript"
            ],
            "author": {
                "name": "Sasha Firsov",
                "email": "suns@simulationworks.com",
                "url": "https://blog.firsov.net/"
            },
            "exports": {
                ".": {
                    "import": "./dist/assets/custom-element-bundle.js",
                    "require": "./dist/assets/custom-element-bundle.cjs"
                },
                "./custom-element": {
                    "import": "./dist/assets/custom-element-bundle.js",
                    "require": "./dist/assets/custom-element-bundle.cjs"
                },
                "./package.json": "./package.json"
            },
            "repository": {
                "type": "git",
                "url": "git+https://github.com/EPA-WG/custom-element-dist.git"
            },
            "license": "Apache-2.0",
            "bugs": {
                "url": "https://github.com/EPA-WG/custom-element/issues"
            },
            "homepage": "https://github.com/EPA-WG/custom-element#readme",
            "funding": {
                "type": "patreon",
                "url": "https://www.patreon.com/sashafirsov"
            },
            "web-types": [
                "./src/custom-element/ide/web-types-dce.json",
                "./src/custom-element/ide/web-types-xsl.json"
            ],
            "_id": "@epa-wg/custom-element-dist@0.0.31",
            "gitHead": "a6a84bdc2cc433acf3d3afa827556c79ecacffb8",
            "description": "Binary distribution for [@epa-wg/custom-element][git-url] with StoryBook and test coverage",
            "_nodeVersion": "20.8.1",
            "_npmVersion": "10.1.0",
            "dist": {
                "integrity": "sha512-ISVPKkirFGvTTNFanf9WxOTeEBJrAyjuebqQSJiH97QHgG7pxQQAWUC4heBRbJ9kUo5FUmBDph2d9Rep/POCDw==",
                "shasum": "1a68a8bc37315cbcab0f66247aa54c82d7bc159d",
                "tarball": "https://registry.npmjs.org/@epa-wg/custom-element-dist/-/custom-element-dist-0.0.31.tgz",
                "fileCount": 299,
                "unpackedSize": 9437753,
                "signatures": [
                    {
                        "keyid": "SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA",
                        "sig": "MEYCIQCqwIDEcc+kYWDg9a1eTK20CqiJSAuRgzstYRFCCxxMYgIhAJJAQHlah0kgCTZQbUXX0sl0/a7n1yLzLngKFm8MShfH"
                    }
                ]
            },
            "_npmUser": {
                "name": "sasha-firsov",
                "email": "suns@simulationworks.com"
            },
            "directories": {},
            "maintainers": [
                {
                    "name": "sasha-firsov",
                    "email": "suns@simulationworks.com"
                }
            ],
            "_npmOperationalInternal": {
                "host": "s3://npm-registry-packages",
                "tmp": "tmp/custom-element-dist_0.0.26_1722929379048_0.7994188371789248"
            },
            "_hasShrinkwrap": false
        }
    },
    "time": {
        "created": "2024-05-13T05:27:10.377Z",
        "modified": "2024-08-06T07:29:39.484Z",
        "0.0.1": "2024-05-13T05:27:10.717Z",
        "0.0.21": "2024-05-13T06:01:14.597Z",
        "0.0.22": "2024-06-25T03:55:52.525Z",
        "0.0.23": "2024-06-27T03:25:14.314Z",
        "0.0.24": "2024-07-22T03:10:12.564Z",
        "0.0.31": "2024-08-06T07:29:39.264Z"
    },
    "bugs": {
        "url": "https://github.com/EPA-WG/custom-element/issues"
    },
    "author": {
        "name": "Sasha Firsov",
        "email": "suns@simulationworks.com",
        "url": "https://blog.firsov.net/"
    },
    "license": "Apache-2.0",
    "homepage": "https://github.com/EPA-WG/custom-element#readme",
    "keywords": [
        "WebComponent",
        "Declarative Custom Element",
        "XSLT",
        "JS",
        "javascript"
    ],
    "repository": {
        "type": "git",
        "url": "git+https://github.com/EPA-WG/custom-element-dist.git"
    },
    "description": "Binary distribution for [@epa-wg/custom-element][git-url] with StoryBook and test coverage",
    "maintainers": [
        {
            "name": "sasha-firsov",
            "email": "suns@simulationworks.com"
        }
    ],
    "readme": "# custom-element-dist\nBinary distribution for [@epa-wg/custom-element][git-url] with StoryBook and test coverage\n\n`custom-element` [![git][github-image] GitHub][git-url]\n| [tests project][git-test-url]\n| [![NPM version][npm-image]][npm-url]\n| [![coverage][coverage-image]][coverage-url]\n| [StoryBook][sb-url]\n\n# Content\n[bin/build.sh] generates binaries to be kept as in Git release as in NPM package.\nIt serves the record of compliance on the moment of build.\n## [dist](dist)\nCan be used as CDN entry with minified bundle: [custom-element-bundle.js][bundle-url]\n\nEach individual component of `custom-element` lib is available as hashed JS.\n\n## [coverage](coverage)\nProvides the unit test coverage for lib and StoryBooks\n\n## [storybook-static][sb-url]\nCDN version of StoryBook.\n\n[git-url]:        https://github.com/EPA-WG/custom-element\n[git-test-url]:   https://github.com/EPA-WG/custom-element-dist\n[github-image]:   https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg\n[npm-image]:      https://img.shields.io/npm/v/@epa-wg/custom-element-dist.svg\n[npm-url]:        https://npmjs.org/package/@epa-wg/custom-element-dist\n[coverage-image]: https://unpkg.com/@epa-wg/custom-element-dist@0.0.31/coverage/src/custom-element/coverage.svg\n[coverage-url]:   https://unpkg.com/@epa-wg/custom-element-dist@0.0.31/coverage/src/custom-element/index.html\n[sb-url]:         https://unpkg.com/@epa-wg/custom-element-dist@0.0.31/storybook-static/index.html\n[bundle-url]:     https://unpkg.com/@epa-wg/custom-element-dist@0.0.31/dist/custom-element-bundle.js\n",
    "readmeFilename": "README.md"
}