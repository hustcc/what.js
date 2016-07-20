# what.js

> **what.js** what.js is a simple library to get the type of variables. enganced javascript `typeof` function. 

[![Build Status](https://travis-ci.org/hustcc/what.js.svg?branch=master)](https://travis-ci.org/hustcc/what.js) [![npm](https://img.shields.io/npm/v/what.js.svg?style=flat-square)](https://www.npmjs.com/package/what.js) [![npm](https://img.shields.io/npm/dt/what.js.svg?style=flat-square)](https://www.npmjs.com/package/what.js) [![npm](https://img.shields.io/npm/l/what.js.svg?style=flat-square)](https://www.npmjs.com/package/what.js)


# 1. Install

> npm install what.js

Then import it.

```js
var what = require('what.js');

//or

import what from 'what.js';
```

Or import it with `<script>` tag.

```html
<script type="text/javascript" src="what.min.js"></script>
```


# 2. Detail Usage

```js
what({}); // 'object'
what({abc: 123}); // 'object'

what([]); // 'array'
what([123, 'abc']); // 'array'

what(function() {}); // 'function'
what(setTimeout); // 'function'

what(/^what\.js$/); // 'regexp'

what(new Date()); // 'date'

what(null); // 'null'
what(undefined); // 'undefined'

what('abc'); // 'string'
what(123); // 'number'
what(12.3); // 'number'

what(true); // 'boolean'
what(false); // 'boolean'
```


# 3. LICENSE

MIT