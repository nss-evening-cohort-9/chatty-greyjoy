import util from '../../helpers/util';
import seedData from '../../helpers/data/seedData';
import './getMessages.scss';

let messages = [];

const getMessages = () => messages;

const addMessages = (newMessage) => {
  messages.push(newMessage);
  if (messages.length > 20) {
    messages.shift();
  }
};

const domStringBuilder = () => {
  let domString = '';
  let arrayLength = 0;
  messages.forEach((message) => {
    arrayLength += 1;
    domString += '<div class="col-12">';
    domString += '  <div class="card col-4 d-flex">';
    domString += '    <div class="card-body">';
    const selection = document.getElementById(`${message.username}`);
    if (message.username === selection.id && selection.checked) {
      domString += `<div class="userName text-warning">${message.username}</div>`;
    } else {
      domString += `<div class="userName">${message.username}</div>`;
    }
    domString += `     <div class="cardBody">${message.message}</div>`;
    domString += `     <div class="timeStamp">${message.timeStamp}</div>`;
    domString += `     <button id="${arrayLength}" type="button" class="btn btn-danger btn-sm">Delete</button>`;
    domString += '    </div>';
    domString += '  </div>';
    domString += '</div>';
  });
  util.printToDom('msgPrintingDiv', domString);
};

// -----START listeners for radios---------
const userListeners = () => {
  document.getElementById('guest').checked = true;
  document.getElementById('guest').addEventListener('click', domStringBuilder);
  document.getElementById('joebiden666').addEventListener('click', domStringBuilder);
  document.getElementById('lizwarren4u').addEventListener('click', domStringBuilder);
  document.getElementById('axlrose').addEventListener('click', domStringBuilder);
  document.getElementById('pantsuitgirl').addEventListener('click', domStringBuilder);
  document.getElementById('rando_bumpkin').addEventListener('click', domStringBuilder);
};
// -----END listeners for radios---------


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
const myListeners = () => {
  document.getElementById('optionLarge').addEventListener('click', changeFont);
  document.getElementById('optionRegular').addEventListener('click', changeFont);
};
// -----------larger text----------------

const printSeedData = () => {
  seedData.getSeedData()
    .then((resp) => {
      const dataResults = resp.data.messages;
      messages = dataResults;
      domStringBuilder();
      userListeners();
    })
    .catch(err => console.error(err));
  myListeners();
};


const clearMessages = () => {
  messages = [];
  domStringBuilder();
};

export default {
  printSeedData,
  domStringBuilder,
  getMessages,
  addMessages,
  clearMessages,
};
