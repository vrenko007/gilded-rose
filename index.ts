interface Item {
    name: string;
    sellIn: number;
    quality: number;
}

export function updateQuality(items: Item[] = []) {
    items.forEach((item) => {
        //Sulfuras never changes
        if (item.name == 'Sulfuras, Hand of Ragnaros') {
            return;
        }

        switch (item.name) {
            case 'Backstage passes to a TAFKAL80ETC concert':
                if (item.sellIn < 11) {
                    item.quality += 1;
                }
                if (item.sellIn < 6) {
                    item.quality += 1;
                }
                item.quality += 1;
                if (item.sellIn < 1) {
                    item.quality = 0;
                }
                break;
            case 'Aged Brie':
                item.quality += 1;
                break;
            case 'Conjured':
                item.quality -= item.sellIn < 0 ? 4 : 2;
                break;
            default:
                item.quality -= item.sellIn < 0 ? 2 : 1;
                break;
        }

        item.sellIn -= 1;
        item.quality = item.quality < 0 ? 0 : item.quality;
        item.quality = item.quality > 50 ? 50 : item.quality;
    });

    return items;
}
