const { Router } = require('express');
const { zodiacData } = require('../../data/zodiac-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    const zodiacId = req.params.id;
    const findZodiac = zodiacData.find((zodiac) => zodiac.id === zodiacId);
    res.json(findZodiac);
  })
  .get('/', (req, res) => {
    const allZodiacs = zodiacData.map(({ name, dates, symbol }) => ({ name, dates, symbol }));
    res.json(allZodiacs);
  })
;
