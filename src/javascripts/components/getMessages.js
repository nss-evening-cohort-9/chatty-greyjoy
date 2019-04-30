import getSeedData from '../helpers/data/seedData';
import util from '../helpers/util';
import seedData from '../helpers/data/seedData';

const messages = [];

const domStringBuilder = () => {
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="card">';
    domString += '<div class="card-body">';
    domString += `<div>${message.username}</div>`;
    domString += `<div>${message.message}</div>`;
    domString += `<div>${message.timeStamp}</div>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('msgPrintingDiv', domString);
};

const printSeedData = () => {
  seedData.getSeedData();
  .then((resp) => {
    const dataResults = resp.data.msgs
    messages = dataResults;
    domStringBuilder();
  });
  .catch(err => console.error(err));
};
