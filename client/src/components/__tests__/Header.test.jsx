const request = require('supertest');
const Header = require('../Header');
// import Header from '../Header';

describe('/api/rooms integration test', () => {
  test('it should fetch an array of objects with a url value that is a string', () => {
    axios
      .get('/api/rooms/1')
      .then(res => photos = res.data)
      .catch (err => console.error(err))
    expect(typeof photos.url).toBe('string');
  });
});

// describe('/api/rooms integration test', () => {
//   test('it should fetch an array of objects with a url value that is a string', () => {
//     expect(true).toBe(true);
//   });
// });