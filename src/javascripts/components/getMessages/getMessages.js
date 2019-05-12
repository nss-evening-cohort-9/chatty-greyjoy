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

const likeIdBuilderArr = [];

const domStringBuilder = () => {
  let domString = '';
  const counter = [];
  messages.forEach((message, i) => {
    domString += `<div class="col-12">
                    <div class="card col-4 d-flex">
                      <div class="card-body">
                      <div id="usersDeleteDiv${counter.length}"></div>
                        <div class="timeStamp">${message.timeStamp}</div>
                        <div class="justify-content-center timeStamp"></div>
                        <div class="row justify-content-center">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="thumbs">
                    <i id="unique${i}"class="likes fa fa-thumbs-up"><span class="numThumb">0</span></i>
                  </div>
                  <div class="thumbs">
                    <i id="uniquer${i}"class="dislikes fa fa-thumbs-down"><span class="numThumb">0</span></i>
                  </div>`;
    counter.push(1);
    likeIdBuilderArr.push(i);
  });
  util.printToDom('msgPrintingDiv', domString);
  return messages;
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

const printSeedData = () => seedData.getSeedData()
  .then((resp) => {
    const dataResults = resp.data.messages;
    messages = dataResults;
    myListeners();
  })
  .catch(err => console.error(err));

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
  likeIdBuilderArr,
  messages,
};
