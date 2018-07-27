// const { rooms, photos } = require('./models.js');
const { photos } = require('./models.js');

// const roomData = [
//   {},
//   {},
//   {}
// ]

const photoData = [
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/01.jpg',
    roomID: 1,
    primary: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/02.jpg',
    roomID: 1,
    primary: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/03.jpg',
    roomID: 1,
    primary: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/04.jpg',
    roomID: 1,
    primary: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/05.jpg',
    roomID: 1,
    primary: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/06.jpg',
    roomID: 1,
    primary: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/07.jpg',
    roomID: 1,
    primary: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/08.jpg',
    roomID: 1,
    primary: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/09.jpg',
    roomID: 1,
    primary: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/10.jpg',
    roomID: 1,
    primary: true
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/11.jpg',
    roomID: 1,
    primary: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/12.jpg',
    roomID: 1,
    primary: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/13.jpg',
    roomID: 1,
    primary: false
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/14.jpg',
    roomID: 1,
    primary: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    roomID: 2,
    primary: true
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    roomID: 2,
    primary: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    roomID: 2,
    primary: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    roomID: 2,
    primary: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    roomID: 2,
    primary: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    roomID: 2,
    primary: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    roomID: 3,
    primary: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    roomID: 3,
    primary: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    roomID: 3,
    primary: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    roomID: 3,
    primary: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    roomID: 3,
    primary: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    roomID: 3,
    primary: false
  },
  {
    url: 'https://loremflickr.com/640/480/real,estate,photography/all',
    roomID: 3,
    primary: true
  },

];

// rooms.sync({ force: false }).then(() => {
//   rooms.bulkCreate(roomData).then(() => {
    photos.sync({ force: false }).then(() => {
      photos.bulkCreate(photoData).then(() => {
        console.log('//// Room data seeded ////');
      });
  //   });
  // });
});
