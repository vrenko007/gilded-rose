import {updateQuality} from './index';

describe('Normal item', () => {
    test('lowers both values for every item', () => {
        const [{sellIn, quality}] = updateQuality([{name: '+5 Dexterity Vest', sellIn: 10, quality: 20}]);

        expect(sellIn).toBe(9);
        expect(quality).toBe(19);
    });

    test('quality degrades twice as fast if sellIn is less then zero', () => {
        const [{sellIn, quality}] = updateQuality([{name: '+5 Dexterity Vest', sellIn: -10, quality: 20}]);

        expect(sellIn).toBe(-11);
        expect(quality).toBe(18);
    });

    test('quality is never negative', () => {
        const [{sellIn, quality}] = updateQuality([{name: '+5 Dexterity Vest', sellIn: 10, quality: 0}]);

        expect(sellIn).toBe(9);
        expect(quality).toBe(0);
    });
});

describe('Aged Brie', () => {
    test('increase quality over time', () => {
        const [{sellIn, quality}] = updateQuality([{name: 'Aged Brie', sellIn: 2, quality: 0}]);

        expect(sellIn).toBe(1);
        expect(quality).toBe(1);
    });

    test('quality is never more than 50', () => {
        const [{sellIn, quality}] = updateQuality([{name: 'Aged Brie', sellIn: 2, quality: 50}]);

        expect(sellIn).toBe(1);
        expect(quality).toBe(50);
    });
});
