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
  let deleteId = -1;
  messages.forEach((message) => {
    deleteId += 1;
    messages[deleteId].deleteId = `${deleteId}`;
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
    domString += '    </div>';
    domString += '  </div>';
    domString += '</div>';
    if (message.username === selection.id && selection.checked) {
      domString += `     <div><button id="${deleteId}" type="button" class="btn btn-danger btn-sm">Delete</button></div>`;
    } else {
      domString += `     <div><button id="${deleteId}" type="button" class="invisible btn btn-danger btn-sm">Delete</button></div>`;
    }
  });
  util.printToDom('msgPrintingDiv', domString);
};

// -------START delete button------------
const deleteMessage = (e) => {
  if (messages[e.target.id].deleteId === e.target.id) {
    messages.splice(e.target.id, 1);
  }
  domStringBuilder();
};
// -------END delete button------------

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
  const deleteArr = document.querySelectorAll('.btn-danger');
  deleteArr.forEach((button) => {
    button.addEventListener('click', deleteMessage);
  });
};
// -----------larger text----------------

const printSeedData = () => {
  seedData.getSeedData()
    .then((resp) => {
      const dataResults = resp.data.messages;
      messages = dataResults;
      domStringBuilder();
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
