import util from '../helpers/util';
import seedData from '../helpers/data/seedData';

let messages = [];

const getMessages = () => messages;

const addMessages = (newMessage) => {
  messages.push(newMessage);
};

const domStringBuilder = () => {
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="card col-3">';
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
      const dataResults = resp.data.messages;
      messages = dataResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default {
  printSeedData,
  domStringBuilder,
  getMessages,
  addMessages,
};
