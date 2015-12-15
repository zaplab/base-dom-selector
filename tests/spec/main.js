
import {
    $,
    $$,
} from 'zap-base-dom-selector';

describe('base-dom-selector', () => {
    const element1 = document.createElement('ul');
    element1.id = 'element1';

    const childElement0 = document.createElement('ul');
    childElement0.className = 'child';

    const childElement1 = document.createElement('ul');
    childElement1.className = 'child';

    const childElement2 = document.createElement('ul');
    childElement2.className = 'child';

    beforeEach(() => {
        element1.appendChild(childElement1);
        element1.appendChild(childElement2);
        document.body.appendChild(childElement0);
        document.body.appendChild(element1);
    });

    afterEach(() => {});

    describe('zap-base-js-object should have the following methods', () => {
        it('$', function() {
            expect($).toEqual(jasmine.any(Function));
        });

        it('$$', function() {
            expect($$).toEqual(jasmine.any(Function));
        });
    });

    describe('$', () => {
        it('$("#element1") should find #element1', () => {
            const $element1 = $('#element1');

            expect($element1).not.toBe(null);
        });

        it('$("#element1", parentElement) should find #element1 inside parentElement', () => {
            const $element1 = $('#element1', document.body);

            expect($element1).not.toBe(null);
        });
    });

    describe('$$', () => {
        it('$(".child") should find all elements with class .child', () => {
            const $children = $$('.child');

            expect($children.length).toBe(3);
        });

        it('$(".child", parentElement) should find all elements with class .child of parentElement', () => {
            const $children = $$('.child', element1);

            expect($children.length).toBe(2);
        });
    });
});
