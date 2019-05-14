import util from '../../helpers/util';
import seedData from '../../helpers/data/seedData';
import $ from '../../../../node_modules/jquery';
import './getMessages.scss';

let messages = [];
let currentUser = 'guest';

const addMessages = (newMessage) => {
  const msg = newMessage;
  msg.id = messages.length;
  messages.push(msg);
  if (messages.length > 20) {
    messages.shift();
  }
};

const clearUser = () => {
  const addColor = document.getElementsByClassName('colorChangeClass');
  for (let i = 0; i < addColor.length; i += 1) {
    addColor[i].classList.remove('text-warning');
  }
};

const domStringBuilder = () => {
  let domString = '';
  messages.forEach((message, i) => {
    messages[i].deleteId = `${i}`;
    domString += `<div id="cardId${i}" class="col-12">
                    <div class="card col-4 d-flex">
                      <div class="card-body">
                      <div class="userName colorChangeClass" id="${message.username}">${message.username}</div>
                        <div class="timeStamp">${message.timeStamp}</div>
                        <div class="cardBody">${message.message}</div>
                        <div class="row justify-content-center">
                        <div class="justify-content-center timeStamp"></div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="thumbs">
                    <i data-id="like_${message.id}" class="likes fa fa-thumbs-up"><span class="numThumb">${message.likes.length}</span></i>
                  </div>
                  <div class="thumbs">
                    <i data-id="dislike_${message.id}"class="dislikes fa fa-thumbs-down"><span class="numThumb">${message.dislikes.length}</span></i>
                  </div>`;
    const selection = document.getElementById(`${message.username}`);
    // const radioGroup = document.getElementsByClassName('userSelector');
    // console.error(typeof radioGroup);
    // const something = radioGroup.find(x => message.username === selection.id && x.checked);
    console.error(selection);
    if ($(selection).prop('checked')) {
      console.error(selection);
      console.error('try');
      domString += `<div class="davesDiv"><button id="${i}" type="button" class="btn btn-danger btn-sm">Delete</button></div>`;
    } else {
      // console.error('hi');
      domString += `<div class="davesDiv"><button id="${i}" type="button" class="invisible btn btn-danger btn-sm">Delete</button></div>`;
    }
  });
  util.printToDom('msgPrintingDiv', domString);
  document.getElementById('guest').checked = true;
  $('.userSelector').change((e) => {
    clearUser();
    currentUser = e.target.id;
    if ($(e.target).prop('checked')) {
      const newTarget = messages.find(m => m.username === e.target.id);
      const userColorHeader = document.getElementById(`${newTarget.username}`);
      if (newTarget.username === e.target.id) {
        userColorHeader.classList.add('text-warning');
      }
    }
  });
  $('.likes').click((e) => {
    e.preventDefault();
    const msgId = ($(e.target).data('id'));
    let alreadyVoted = false;
    messages.forEach((m) => {
      if (`like_${m.id}` === msgId) {
        m.likes.forEach((l) => {
          if (l === currentUser || m.username === currentUser) {
            alreadyVoted = true;
          }
        });
        if (!alreadyVoted) {
          m.likes.push(currentUser);
          $(e.target).text(m.likes.length);
        }
      }
    });
  });
  $('.dislikes').click((e) => {
    e.preventDefault();
    const msgId = ($(e.target).data('id'));
    let alreadyVoted = false;
    messages.forEach((m) => {
      if (`dislike_${m.id}` === msgId) {
        m.dislikes.forEach((dl) => {
          if (dl === currentUser || m.username === currentUser) {
            alreadyVoted = true;
          }
        });
        if (!alreadyVoted) {
          m.dislikes.push(currentUser);
          $(e.target).text(m.dislikes.length);
        }
      }
    });
  });
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
    for (let i = 0; i < messages.length; i += 1) {
      messages[i].id = i;
    }
    myListeners();
  })
  .catch(err => console.error(err));

const clearMessages = () => {
  messages = [];
  domStringBuilder();
};


// let deleteId = -1;
// deleteId += 1;
//     messages[deleteId].deleteId = `${deleteId}`;

//     const deleteArr = document.querySelectorAll('.btn-danger');
//   deleteArr.forEach((button) => {
//     button.addEventListener('click', deleteMessage);
//   });

// -------START delete button------------
// const deleteMessage = (e) => {
//   if (messages[e.target.id].deleteId === e.target.id) {
//     messages.splice(e.target.id, 1);
//   }
//   domStringBuilder();
// };


// const deleteArr = document.getElementById('deleteBtn');
// deleteArr.forEach((button) => {
//   button.addEventListener('click', deleteMessage);
// });
// -------END delete button------------


export default {
  printSeedData,
  domStringBuilder,
  addMessages,
  clearMessages,
  messages,
};
