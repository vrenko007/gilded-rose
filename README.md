Your task is to add the new feature to our system so that we can begin selling a new category of items.

First an introduction to our system:

- All items have a sellIn value which denotes the number of days we have to sell the item
- All items have a quality value which denotes how valuable the item is
- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

- Once the sellIn days is less then zero, quality degrades twice as fast
- The quality of an item is never negative
- "Aged Brie" actually increases in quality the older it gets
- The quality of an item is never more than 50
- "Sulfuras", being a legendary item, never has to be sold nor does it decrease in quality
- "Backstage passes", like aged brie, increases in quality as it's sellIn value decreases; quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

- "Conjured" items degrade in quality twice as fast as normal items
