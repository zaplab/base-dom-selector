
import {
    $,
    $$,
    getNext,
    getParent,
    getParents,
} from 'zap-base-dom-selector';

describe('base-dom-selector', () => {
    const element1 = document.createElement('ul');
    element1.id = 'element1';

    const childElement0 = document.createElement('li');
    childElement0.className = 'child first';

    const childElement1 = document.createElement('li');
    childElement1.className = 'child';

    const childElement2 = document.createElement('li');
    childElement2.className = 'child special';

    const childElement3 = document.createElement('li');
    childElement3.className = 'child last';

    beforeEach(() => {
        element1.appendChild(childElement1);
        element1.appendChild(childElement2);
        element1.appendChild(childElement3);
        document.body.appendChild(childElement0);
        document.body.appendChild(element1);
    });

    afterEach(() => {});

    describe('base-dom-selector should export the following', () => {
        it('$', function() {
            expect($).toEqual(jasmine.any(Function));
        });

        it('$$', function() {
            expect($$).toEqual(jasmine.any(Function));
        });

        it('getNext', function() {
            expect(getNext).toEqual(jasmine.any(Function));
        });

        it('getParent', function() {
            expect(getParent).toEqual(jasmine.any(Function));
        });

        it('getParents', function() {
            expect(getParents).toEqual(jasmine.any(Function));
        });
    });

    describe('$', () => {
        it('$("#element1") should find #element1', () => {
            const $element1 = $('#element1');

            expect($element1).not.toBeUndefined();
            expect($element1).not.toBeNull();
        });

        it('$("#element1", parentElement) should find #element1 inside parentElement', () => {
            const $element1 = $('#element1', document.body);

            expect($element1).not.toBeUndefined();
            expect($element1).not.toBeNull();
        });
    });

    describe('$$', () => {
        it('$(".child") should find all elements with class .child', () => {
            const $children = $$('.child');

            expect($children.length).toBe(4);
        });

        it('$(".child", parentElement) should find all elements with class .child of parentElement', () => {
            const $children = $$('.child', element1);

            expect($children.length).toBe(3);
        });
    });

    describe('getNext', () => {
        it('getNext(childElement1) should be childElement2', () => {
            const $next = getNext(childElement1);

            expect($next).toBe(childElement2);
        });

        it('getNext(childElement1, \'.special\') should be childElement2', () => {
            const $next = getNext(childElement1, '.special');

            expect($next).toBe(childElement2);
        });

        it('getNext(childElement3) should be null', () => {
            const $next = getNext(childElement3);

            expect($next).toBe(null);
        });
    });

    describe('getParent', () => {
        it('getParent(childElement1) should be element1', () => {
            const $parent = getParent(childElement1);

            expect($parent).toBe(element1);
        });

        it('getParent(childElement1, \'body\') should be body', () => {
            const $parent = getParent(childElement1, 'body');

            expect($parent).toBe(document.body);
        });
    });

    describe('getParents', () => {
        it('getParents(childElement1) should return an array of all parent elements', () => {
            const $parents = getParents(childElement1);

            expect($parents).toEqual([
                element1,
                document.body,
                document.documentElement,
            ]);
        });

        it('getParents(childElement1, \'#element1\') should return an array of all parent elements that match the selector', () => {
            const $parents = getParents(childElement1, '#element1');

            expect($parents).toEqual([
                element1,
            ]);
        });
    });
});
