const ColorThief = require('colorthief');

const img = 'gojo.jpg';

ColorThief.getColor(img)
    .then(color => { console.log(color) })
    .catch(err => { console.log(err) })

ColorThief.getPalette(img, 5)
    .then(palette => { console.log(palette) })
    .catch(err => { console.log(err) })
//simple library but cannot append to most APIs
