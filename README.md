# double-n

[![npm version][version-image]][version-url]
[![code style: prettier][prettier-image]][prettier-url]
[![MIT license][license-image]][license-url]

IEEE 754 double-precision binary floating-point with N number of significant precision bits


[version-image]: https://img.shields.io/npm/v/double-n.svg?style=flat
[version-url]: https://www.npmjs.com/package/double-n
[license-image]: https://img.shields.io/github/license/dividab/double-n.svg?style=flat
[license-url]: https://opensource.org/licenses/MIT
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat
[prettier-url]: https://github.com/prettier/prettier

## Installation

`npm install --save uom`

The library is compiled to ES5 and no polyfills are required.

## Usage

```ts
import * as DoubleN from "double-n";

const num = 7.000002;

DoubleN.numberToDoubleN(num, 51); // 7.000002
DoubleN.numberToDoubleN(num, 40); // 7.000001999997039
DoubleN.numberToDoubleN(num, 21); // 7.000001907348633
DoubleN.numberToDoubleN(num, 20); // 7
DoubleN.numberToDoubleN(num, 2);  // 7
DoubleN.numberToDoubleN(num, 1);  // 6
DoubleN.numberToDoubleN(num, 0);  // 4
```
