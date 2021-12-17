/* eslint-disable camelcase */
const fakeUser = [
  {
    username: 'Bob',
    googleId: 'Bob@gmail.com',
    thumbnail: 'Imagenotfound',
    name: 'Bob Builder',
    email: 'bob@builder.com',
    contact: '1112223456',
    description: 'Tools Collector',
    rating: 5,
    type: 'lender'
  },
  {
    username: 'Jared',
    googleId: 'Jared@gmail.com',
    thumbnail: 'Imagenotfound',
    name: 'Jared Pickles',
    email: 'jared@pickles.com',
    contact: '1110002222',
    description: 'New Lender',
    rating: 0,
    type: 'lender'
  },
  {
    username: 'Diego',
    googleId: 'diego@gmail.com',
    thumbnail: 'Imagenotfound',
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
    brand: 'BLACK+DECKER Electric Lawn Mower',
    type: 'Outdoor Power Tools',
    price: 50,
    condition: 'Great',
    value: 200,
    user_id: 3,
    availability: true,
    description: 'Lightweight corded electric mower gasless 10 Amp 15 inch electric mower for powering through rough grass'
  },
  {
    brand: 'JUNELILY',
    type: 'Camping Tents',
    price: 80,
    condition: 'Good',
    value: 150,
    user_id: 2,
    availability: true,
    description: '9-Person Family Tent 3-Room for Parties'
  },
  {
    brand: 'Blast Zone',
    type: 'Bounce house',
    price: 300,
    condition: 'Premium Quality',
    value: 500,
    user_id: 1,
    availability: true,
    description: 'Inflatable Bounce House with Blower'
  }
];

const fakePost = [
  {
    user_id: 1,
    // lender_id: 1,
    item_id: 3,
    rating: 4,
    description: 'Amazing product for kids party'
  }
];

const fakeImg = [
  {
    item_id: 1,
    imgUrl: 'https://m.media-amazon.com/images/I/71wDqAUdXgS._AC_SL1500_.jpg'
  },
  {
    item_id: 2,
    imgUrl: 'https://www.rei.com/media/8dcbb8bc-c94c-42b1-bc40-89f4063c6da8?size=784x588'
  },
  {
    item_id: 3,
    imgUrl:  'https://www.bouncehousesnow.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/a/r/arched-castle_nowm0_2.jpg'
  }
];
module.exports.fakeUser = fakeUser;
module.exports.fakeItem = fakeItem;
module.exports.fakePost = fakePost;
module.exports.fakeImg = fakeImg;
