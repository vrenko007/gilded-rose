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

describe('Sulfuras, Hand of Ragnaros', () => {
    test("Sulfuras doesn't change", () => {
        const [{sellIn, quality}] = updateQuality([{name: 'Sulfuras, Hand of Ragnaros', sellIn: 10, quality: 10}]);

        expect(sellIn).toBe(10);
        expect(quality).toBe(10);
    });
});

describe('Backstage passes to a TAFKAL80ETC concert', () => {
    test('More than 10 days', () => {
        const [{sellIn, quality}] = updateQuality([{name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 11, quality: 0}]);

        expect(sellIn).toBe(10);
        expect(quality).toBe(1);
    });

    test('More than 5 days but less than 10', () => {
        const [{sellIn, quality}] = updateQuality([{name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 9, quality: 0}]);

        expect(sellIn).toBe(8);
        expect(quality).toBe(2);
    });

    test('Less than 5 days', () => {
        const [{sellIn, quality}] = updateQuality([{name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 4, quality: 0}]);

        expect(sellIn).toBe(3);
        expect(quality).toBe(3);
    });

    test('quality is never more than 50', () => {
        const [{sellIn, quality}] = updateQuality([{name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 2, quality: 50}]);

        expect(sellIn).toBe(1);
        expect(quality).toBe(50);
    });

    test('Concert Over', () => {
        const [{sellIn, quality}] = updateQuality([{name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 0, quality: 10}]);

        expect(sellIn).toBe(-1);
        expect(quality).toBe(0);
    });
});

describe('Conjured', () => {
    test('degrades correctly', () => {
        const [{sellIn, quality}] = updateQuality([{name: 'Conjured', sellIn: 10, quality: 10}]);

        expect(sellIn).toBe(9);
        expect(quality).toBe(8);
    });

    test('quality degrades twice as fast if sellIn is less then zero', () => {
        const [{sellIn, quality}] = updateQuality([{name: 'Conjured', sellIn: -10, quality: 20}]);

        expect(sellIn).toBe(-11);
        expect(quality).toBe(16);
    });
});
