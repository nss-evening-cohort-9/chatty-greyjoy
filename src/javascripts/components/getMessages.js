import util from '../helpers/util';
import seedData from '../helpers/data/seedData';
import './getMessages.scss';

let messages = [];

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
  seedData.getSeedData()
    .then((resp) => {
      console.error(resp);
      const dataResults = resp.data.messages;
      messages = dataResults;
      console.error(messages);
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { printSeedData };

// --------------Start------------------
// -----------larger text----------------

const large = document.getElementById('optionLarge');
const regular = document.getElementById('optionRegular');


const msgDiv = document.getElementById('msgPrintingDiv');

large.addEventListener('click', () => {
  msgDiv.style.fontSize = '150%';
});
regular.addEventListener('click', () => {
  msgDiv.style.fontSize = '14px';
});
// -----------larger text----------------
// --------------End--------------------
