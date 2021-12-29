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
    availability: true,
    description: 'Lightweight corded electric mower gasless 10 Amp 15 inch electric mower for powering through rough grass',
    userId: 1
  },
  {
    brand: 'JUNELILY',
    type: 'Camping Tents',
    price: 80,
    condition: 'Good',
    value: 150,
    availability: true,
    description: '9-Person Family Tent 3-Room for Parties',
    userId: 2
  },
  {
    brand: 'Blast Zone',
    type: 'Bounce house',
    price: 300,
    condition: 'Premium Quality',
    value: 500,
    availability: true,
    description: 'Inflatable Bounce House with Blower',
    userId: 3
  },
  {
    brand: 'Kitchen Aid',
    type: 'kitchen appliance',
    price: 150,
    condition: 'Good',
    value: 350,
    availability: true,
    description: 'KitchenAid® Artisan® 5 qt. Tilt-Head Stand Mixer in Empire Red',
    userId: 1
  },
  {
    brand: 'Crock Pot',
    type: 'kitchen appliance',
    price: 80,
    condition: 'Great',
    value: 140,
    availability: true,
    description: 'Crock-Pot - 10qt Digital Multi Cooker - Stainless Steel',
    userId: 1
  },
  {
    brand: 'Coleman RoadTrip X-Cursion Propane Grill',
    type: 'Backyard Appliance',
    price: 80,
    condition: 'Working condition',
    value: 200,
    availability: true,
    description: 'Propane Grill; Need to get your own propane gas',
    userId: 1
  },
  {
    brand: 'Texas Instrument TI-83 Plus Calculator',
    type: 'Calculator',
    price: 15,
    condition: 'Good',
    value: 100,
    availability: true,
    description: 'The TI-83 Plus is an easy-to-use graphing calculator for math and science.',
    userId: 1
  },
  {
    brand: 'YABER 7200 Lumen full HD projector',
    type: 'Home Entertainment',
    price: 80,
    condition: 'Good',
    value: 200,
    user_id: 1,
    availability: true,
    description: 'YABER Y31 home projector adopts an advanced German LED light source, high quality materials and delicate manufacturing process',
    userId: 1
  },
];

const fakePost = [
  {
    rating: 4,
    description: 'Amazing product for kids party',
    itemId: 3,
    userId: 1
  }
];

const fakeImg = [
  {
    imgUrl: 'https://m.media-amazon.com/images/I/71wDqAUdXgS._AC_SL1500_.jpg',
    itemId: 1,
  },
  {
    imgUrl: 'https://www.rei.com/media/8dcbb8bc-c94c-42b1-bc40-89f4063c6da8?size=784x588',
    itemId: 2,
  },
  {
    imgUrl: 'https://www.bouncehousesnow.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/a/r/arched-castle_nowm0_2.jpg',
    itemId: 3,
  },
  {
    imgUrl: 'https://m.media-amazon.com/images/I/91BB48YfvFL._AC_SL1500_.jpg',
    itemId: 4,
  },
  {
    imgUrl: 'https://media.kohlsimg.com/is/image/kohls/25941_Aqua_Sky?wid=600&hei=600&op_sharpen=1',
    itemId: 5,
  },
  {
    imgUrl: 'https://i5.walmartimages.com/asr/5db77f94-d5f8-4752-8058-0690c3ca125e.8fd1223dca2cb48a460aabbf4702c6ab.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    itemId: 6,
  },
  {
    imgUrl: 'https://www.schoolmart.com/wp-content/uploads/2016/04/83plus_hi-1.jpg',
    itemId: 7,
  },
  {
    imgUrl: 'https://m.media-amazon.com/images/I/61AuQJ+hy6L._AC_SS450_.jpg',
    itemId: 8,
  },
];

module.exports.fakeUser = fakeUser;
module.exports.fakeItem = fakeItem;
module.exports.fakePost = fakePost;
module.exports.fakeImg = fakeImg;

