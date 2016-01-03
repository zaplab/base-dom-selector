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
cons nextElement = getNext(element);
```

### getParent
```js
cons parent = getParent(element);
cons specificParent = getParent(element, '.selector');
```

### getParents
```js
cons parents = getParents(element);
cons specificParents = getParents(element, '.selector');
```
