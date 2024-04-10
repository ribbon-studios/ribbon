[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Coveralls][coveralls-image]][coveralls-url]

[![CI Build][github-actions-image]][github-actions-url]
[![Maintainability][maintainability-image]][maintainability-url]
[![Semantic Release][semantic-release-image]][semantic-release-url]
[![Code Style: Prettier][code-style-image]][code-style-url]

# `@ribbon-studios/ribbon`

### Preview

![Example](https://github.com/ribbon-studios/ribbon/assets/9692284/5ee5e4b3-c676-4ee5-9ec4-ae7f52fd4640)

### Usage

```tsx
import { Ribbon } from '@ribbon-studios/ribbon';

export function MyApp() {
  return (
    <div>
      My super cool content.
      <Ribbon>Local</Ribbon>
    </div>
  );
}
```

### Properties

| Name            | Description                   | Optional?                     |
| --------------- | ----------------------------- | ----------------------------- |
| children        | The contents of the ribbon    | Yes                           |
| color           | The font color                | Yes (defaults to `black`)     |
| backgroundColor | The background color          | Yes (defaults to `white`)     |
| position        | The positioning of the ribbon | Yes (defaults to `top-right`) |

[_**Want to Contribute?**_](/CONTRIBUTING.md)

[npm-version-image]: https://img.shields.io/npm/v/@ribbon-studios/ribbon.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/@ribbon-studios/ribbon.svg
[npm-url]: https://npmjs.org/package/@ribbon-studios/ribbon
[github-actions-image]: https://img.shields.io/github/actions/workflow/status/ribbon-studios/ribbon/ci.yml?event=push
[github-actions-url]: https://github.com/ribbon-studios/ribbon/actions/workflows/ci.yml?query=branch%3Amain
[coveralls-image]: https://img.shields.io/coveralls/ribbon-studios/ribbon.svg
[coveralls-url]: https://coveralls.io/github/ribbon-studios/ribbon?branch=main
[code-style-image]: https://img.shields.io/badge/code%20style-prettier-ff69b4.svg
[code-style-url]: https://prettier.io
[maintainability-image]: https://img.shields.io/codeclimate/maintainability/ribbon-studios/ribbon
[maintainability-url]: https://codeclimate.com/github/ribbon-studios/ribbon/maintainability
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[semantic-release-image]: https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079
