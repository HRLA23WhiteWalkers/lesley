const { photos } = require('./models.js');

const roomData = [
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/01.jpg',
    listing_id: 1,
    default: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/02.jpg',
    listing_id: 1,
    default: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/03.jpg',
    listing_id: 1,
    default: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/04.jpg',
    listing_id: 1,
    default: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/05.jpg',
    listing_id: 1,
    default: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/06.jpg',
    listing_id: 1,
    default: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/07.jpg',
    listing_id: 1,
    default: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/08.jpg',
    listing_id: 1,
    default: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/09.jpg',
    listing_id: 1,
    default: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/10.jpg',
    listing_id: 1,
    default: true
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/11.jpg',
    listing_id: 1,
    default: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/12.jpg',
    listing_id: 1,
    default: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/13.jpg',
    listing_id: 1,
    default: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/14.jpg',
    listing_id: 1,
    default: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    listing_id: 2,
    default: true
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    listing_id: 2,
    default: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    listing_id: 2,
    default: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    listing_id: 2,
    default: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    listing_id: 2,
    default: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    listing_id: 2,
    default: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    listing_id: 3,
    default: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    listing_id: 3,
    default: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    listing_id: 3,
    default: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    listing_id: 3,
    default: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    listing_id: 3,
    default: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    listing_id: 3,
    default: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    listing_id: 3,
    default: true
  },

];

photos.sync({ force: false }).then(() => {
  photos.bulkCreate(roomData).then(() => {
    console.log('//// Room data seeded ////');
  });
});
