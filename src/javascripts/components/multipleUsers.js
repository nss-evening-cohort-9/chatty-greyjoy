import seedData from '../helpers/data/seedData';
import util from '../helpers/util';

let messages = [];

const usersBuilder = () => {
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
  seedData.getSeedData()
    .then((resp) => {
      console.error(resp);
      const dataResults = resp.data.messages;
      messages = dataResults;
      console.error(messages);
      usersBuilder();
    })
    .catch(err => console.error(err));
};
