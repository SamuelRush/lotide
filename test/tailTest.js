const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail([5,6,7])[0], 6);
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Hello");
assertEqual(tail([5,7])[0], 7);
assertEqual(tail([])[0], "Hello");