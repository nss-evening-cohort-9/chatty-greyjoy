import util from '../../helpers/util';
import seedData from '../../helpers/data/seedData';
import './getMessages.scss';
import $ from '../../../../node_modules/jquery';

let messages = [];
const getMessages = () => messages;

const addMessages = (newMessage) => {
  messages.push(newMessage);
  if (messages.length > 20) {
    messages.shift();
  }
};

const whatever = (e) => {
  console.error(e);
};

const domStringBuilder = () => {
  let domString = '';
  let deleteId = -1;
  const idBuilderArr = [];
  messages.forEach((message, i) => {
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
    domString += '     <div " class="timeStamp"></div>';
    domString += '      <div class="row justify-content-center">';
    domString += '       <div class="thumbs">';
    domString += `         <i id="unique${i}"class="likes fa fa-thumbs-up"><span class="numThumb">0</span></i>`;
    domString += '       </div>';
    domString += '       <div class="thumbs">';
    domString += `         <i id="uniquer${i}"class="dislikes fa fa-thumbs-down"><span class="numThumb">0</span></i>`;
    domString += '       </div>';
    domString += '      </div>'; // end flex row thumbs div
    domString += '    </div>';
    domString += '  </div>';
    domString += '</div>';
    idBuilderArr.push(i);
  });
  util.printToDom('msgPrintingDiv', domString); // -------START delete button------------
  const deleteMessage = (e) => {
    if (messages[e.target.id].deleteId === e.target.id) {
      messages.splice(e.target.id, 1);
    }
    domStringBuilder();
  };
  const deleteArr = document.querySelectorAll('.btn-danger');
  deleteArr.forEach((button) => {
    button.addEventListener('click', deleteMessage);
  }); // -------END delete button------------
  $('.likes').click((e) => {
    e.preventDefault();
    console.error(e);
    idBuilderArr.forEach((num) => {
      const theId = `unique${num}`;
      if (e.target.id === theId) {
        const likeNum = document.getElementById(theId);
        const oldNum = likeNum.firstChild.innerHTML;
        likeNum.firstChild.innerHTML = parseInt(oldNum, 10) + 1;
      }
    });
  });
  $('.dislikes').click((e) => {
    e.preventDefault();
    idBuilderArr.forEach((num) => {
      const theId = `uniquer${num}`;
      if (e.target.id === theId) {
        const dislikeNum = document.getElementById(theId);
        const oldNum = dislikeNum.firstChild.innerHTML;
        dislikeNum.firstChild.innerHTML = parseInt(oldNum, 10) + 1;
      }
    });
  });
  // document.getElementsByClassName('likes').addEventListener('click', whatever);
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
  whatever,
};
