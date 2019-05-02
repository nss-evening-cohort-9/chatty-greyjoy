import util from '../helpers/util';
import seedData from '../helpers/data/seedData';
import './getMessages.scss';

let messages = [];

const domStringBuilder = () => {
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="card col-12">';
    domString += '<div class="card-body">';
    domString += `<div>${message.username}</div>`;
    domString += `<div>${message.message}</div>`;
    domString += `<div>${message.timeStamp}</div>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('msgPrintingDiv', domString);
};

// --------------Start------------------

const changeFont = (e) => {
  e.preventDefault();
  const msgDiv = document.getElementById('msgPrintingDiv');
  if (e.target.id === 'optionRegular') {
    msgDiv.style.fontSize = '14px';
  } else if (e.target.id === 'optionLarge') {
    msgDiv.style.fontSize = '150%';
  }
};

// -----------larger text----------------
const eventListeners = () => {
  document.getElementById('optionLarge').addEventListener('click', changeFont);
  document.getElementById('optionRegular').addEventListener('click', changeFont);
};
// -----------larger text----------------

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
  eventListeners();
};

// --------------End--------------------

export default { printSeedData, eventListeners, changeFont };
