import util from '../../helpers/util';
import seedData from '../../helpers/data/seedData';
import likeBtns from '../likeBtns/likeBtns';
import $ from '../../../../node_modules/jquery';
import './getMessages.scss';

let messages = [];
const getMessages = () => messages;

const addMessages = (newMessage) => {
  messages.push(newMessage);
  if (messages.length > 20) {
    messages.shift();
  }
};
const userNameIdCounter = [];

// const likeIdBuilderArr = [];
const domStringBuilder = () => {
  let domString = '';
  messages.forEach((message, i) => {
    domString += `<div class="col-12">
                    <div class="card col-4 d-flex">
                      <div class="card-body">
                      <div class="userName" id="${message.username}${userNameIdCounter.length}">${message.username}</div>
                        <div class="timeStamp">${message.timeStamp}</div>
                        <div class="cardBody">${message.message}</div>
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
    userNameIdCounter.push(1);
    // likeIdBuilderArr.push(i);
  });
  util.printToDom('msgPrintingDiv', domString);
  document.getElementById('guest').checked = true;
  const radioInput = document.querySelectorAll('.userSelector');
  $(radioInput).click((e) => {
    if ($(radioInput).is(':checked')) {
      let counter = -1;
      const changeColor = e.target.id;
      messages.forEach((message) => {
        counter += 1;
        const matchId = changeColor + counter;
        if (matchId === `${message.username}${counter}`) {
          const userIdToChange = document.getElementById(`${message.username}${counter}`);
          userIdToChange.classList.add('text-warning');
        } else {
          const userIdToChange = document.getElementById(`${message.username}${counter}`);
          userIdToChange.classList.remove('text-warning');
        }
      });
    }
  });
  likeBtns.likeBtnEvent();
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
  // likeIdBuilderArr,
  messages,
};
