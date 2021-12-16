const fakeUser = [
  {
    id: 1,
    name: 'Bob Builder',
    email: 'bob@builder.com',
    contact: '1112223456',
    description: 'Tools Collector',
    rating: 5,
    type: 'lender'
  },
  {
    id: 2,
    name: 'Jared Pickles',
    email: 'jared@pickles.com',
    contact: '1110002222',
    description: 'New Lender',
    rating: 0,
    type: 'lender'
  },
  {
    id: 3,
    name: 'Diego Marquez',
    email: 'diego@marquez.com',
    contact: '1111113333',
    description: 'Rent my tools for cheap',
    rating: 3,
    type: 'lender'
  },
];

const fakeItem = [
  {
    id: 1,
    brand: 'BLACK+DECKER Electric Lawn Mower',
    type: 'Outdoor Power Tools',
    price: 50,
    condition: 'Great',
    value: 200,
    userId: 3,
    availability: true,
    description: 'Lightweight corded electric mower gasless 10 Amp 15 inch electric mower for powering through rough grass'
  },
  {
    id: 2,
    brandName: 'JUNELILY',
    itemType: 'Camping Tents',
    price: 80,
    condition: 'Good',
    value: 150,
    userId: 2,
    availability: true,
    description: '9-Person Family Tent 3-Room for Parties'
  },
  {
    id: 3,
    brandName: 'Blast Zone',
    itemType: 'Bounce house',
    price: 300,
    condition: 'Premium Quality',
    value: 500,
    userId: 1,
    availability: true,
    description: 'Inflatable Bounce House with Blower'
  }
];

const fakePost = [
  {
    id: 1,
    renterId: 1,
    lenderId: 1,
    itemId: 3,
    rating: 4,
    description: 'Amazing product for kids party'
  }
];

const fakeImg = [
  {
    id: 1,
    itemId: 1,
    imgUrl: 'https://m.media-amazon.com/images/I/71wDqAUdXgS._AC_SL1500_.jpg'
  },
  {
    id: 2,
    itemId: 2,
    imgUrl: 'https://www.rei.com/media/8dcbb8bc-c94c-42b1-bc40-89f4063c6da8?size=784x588'
  },
  {
    id: 3,
    itemId: 3,
    imgUrl:  'https://www.bouncehousesnow.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/a/r/arched-castle_nowm0_2.jpg'
  }
];
module.exports.fakeUser = fakeUser;
module.exports.fakeItem = fakeItem;
module.exports.fakePost = fakePost;
module.exports.fakeImg = fakeImg;
