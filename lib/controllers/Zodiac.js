const { Router } = require('express');
const { zodiacData } = require('../../data/zodiac-data');

module.exports = Router()
  .get('/', (req, res) => {
    const allZodiacs = zodiacData.map(({ name, dates, symbol }) => ({ name, dates, symbol }));
    res.json(allZodiacs);
  });
