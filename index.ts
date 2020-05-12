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
                item.quality += item.sellIn > 10 ? 1 : item.sellIn > 5 ? 2 : 3;
                item.quality = item.sellIn < 1 ? 0 : item.quality;
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
