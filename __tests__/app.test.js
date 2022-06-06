const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { zodiacData } = require('../data/zodiac-data');

describe('4.2-Zodiac-API-FS routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiac should return a list of all zodiacs without ID', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiacData.map(({ name, dates, symbol }) => ({ name, dates, symbol }));
    expect(res.body).toEqual(expected);  
  });

  it('/zodiac/:id(2) should return aries zodiac sign', async () => {
    const res = await request(app).get('/zodiac/2');
    const zodiac2 = { 
      id:'2', 
      name:'aries', 
      dates:'Mar 21 - Apr 19', 
      symbol:'Ram'
    };
    expect(res.body).toEqual(zodiac2);
  });

  it('/zodiac/:id(3) should return aries zodiac sign', async () => {
    const res = await request(app).get('/zodiac/3');
    const zodiac3 = { 
      id:'3', 
      name:'cancer', 
      dates:'Jun 21 - Jul 22', 
      symbol:'Crab' 
    };
    expect(res.body).toEqual(zodiac3);
  });

  afterAll(() => {
    pool.end();
  });
});
