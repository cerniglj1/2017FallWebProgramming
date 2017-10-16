const path = require('path');

module.exports = {
 entry: './jquery-mockup/src/navigation.js',
 output: {
   filename: 'bundle.js',
   path: path.resolve(__dirname, 'jquery-mockup/dist')
 }
};