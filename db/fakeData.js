const fakeUser = [
  {
    id: 1,
    name: 'Bob Builder',
    email: 'bob@builder.com',
    phoneNumber: 1112223456,
    description: 'Tools Collector',
    rating: 5,
    type: 'lender'
  },
  {
    id: 2,
    name: 'Jared Pickles',
    email: 'jared@pickles.com',
    phoneNumber: 3472220987,
    description: 'New Lender',
    rating: 0,
    type: 'lender'
  },
  {
    id: 3,
    name: 'Diego Marquez',
    email: 'diego@marquez.com',
    phoneNumber: 9173213448,
    description: 'Rent my tools for cheap',
    rating: 3,
    type: 'lender'
  },
];

const fakeItem = [
  {
    id: 1,
    brandName: 'BLACK+DECKER Electric Lawn Mower',
    itemType: 'Outdoor Power Tools',
    price: 50,
    condition: 'Great',
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
    rating: 4.5,
    description: 'Amazing product for kids party'
  }
];

module.exports.fakeUser = fakeUser;
module.exports.fakeItem = fakeItem;
module.exports.fakePost = fakePost;
