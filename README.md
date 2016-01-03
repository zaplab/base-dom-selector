# zap-base-dom-selector

just translating (and testing) some old code to ES6,
nothing to see here ;-)

## Install
```
$ npm install zap-base-dom-selector
```

## Usage
```js
import {
    $,
    $$,
    getNext,
    getParent,
    getParents,
} from 'zap-base-dom-selector';
```

### $
```js
const element = $('.selector');
const elementInsideElement = $('.selector', element);
```

### $$
```js
const elements = $$('.selector');
const elementsInsideElement = $$('.selector', element);
```

### getNext
```js
const nextElement = getNext(element);
```

### getParent
```js
const parent = getParent(element);
const specificParent = getParent(element, '.selector');
```

### getParents
```js
const parents = getParents(element);
const specificParents = getParents(element, '.selector');
```
