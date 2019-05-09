import util from '../../helpers/util';
import seedData from '../../helpers/data/seedData';
import './getMessages.scss';
import $ from '../../../../node_modules/jquery';

let messages = [];
const countArr = [];
const eventArr = [];
const getMessages = () => messages;

const addMessages = (newMessage) => {
  messages.push(newMessage);
  if (messages.length > 20) {
    messages.shift();
  }
};

const counterFn = (num) => {
  countArr.push(num);
  return num;
};

// const eventFn = (num) => {
//   eventArr.push(num);
//   return num;
// };

const domStringBuilder = () => {
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="col-12">';
    domString += '  <div class="card col-4 d-flex">';
    domString += '    <div class="card-body">';
    domString += `     <div class="userName">${message.username}</div>`;
    domString += `     <div class="cardBody">${message.message}</div>`;
    domString += `     <div class="timeStamp">${message.timeStamp}</div>`;
    domString += `<div id="unique${countArr.length}" class="timeStamp">`;
    domString += `<i id="unique${eventArr.length}" class="likes fa fa-thumbs-up"></i>  Likes`;
    domString += '<a class="like">';
    domString += `<input class="qty1" name="qty1" readonly="readonly" type="text" value="${countArr.length}"/>`;
    domString += '</a>';
    domString += '</div>';
    domString += '    </div>';
    domString += '  </div>';
    domString += '</div>';
    counterFn(1);
    util.printToDom('msgPrintingDiv', domString);
    $('.likes').click((e) => {
      e.preventDefault();
    });
  });
};

// --------------Change Font Start------------------

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
