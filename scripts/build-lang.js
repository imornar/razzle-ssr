const fs = require('fs');
const path = require('path');
const glob = require('glob');

const filePattern = path.join(__dirname, '..', '.translations', 'src/**/*.json');
const defaultMessages = glob.sync(filePattern)
  .map(filename => fs.readFileSync(filename, 'utf8'))
  .map(JSON.parse)
  .reduce((collection, descriptors) => {
    descriptors.forEach(data => {
      if (collection.hasOwnProperty(data.id)) {
        throw new Error(`Duplicate message id: ${data.id}`);
      }
      collection[data.id] = data.defaultMessage;
    });
    return collection;
  }, {});

// Write the messages to this directory
fs.writeFileSync('./roomi-intl.json', `{ "en": ${JSON.stringify(defaultMessages, null, 2)} }`);
