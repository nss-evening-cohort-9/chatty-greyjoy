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
    domString += `<div id="${i}" class="cardCard col-12">
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
                  </div>
                  <button class="user_${message.username} deleteBtn btn btn-sm" id="btn_${i}" type="button">Delete</button>`;
  });
  util.printToDom('msgPrintingDiv', domString);
  document.getElementById('guest').checked = true;
  $('.userSelector').change((e) => {
    clearUser();
    currentUser = e.target.id;
    if ($(e.target).prop('checked')) {
      const newTarget = messages.find(m => m.username === currentUser);
      const userColorHeader = document.getElementById(`${newTarget.username}`);
      if (newTarget.username === e.target.id) {
        userColorHeader.classList.add('text-warning');
        $(`.user_${e.target.id}`).removeClass(`user_${e.target.id}`);
        const oldTarget = messages.find(m => m.username !== currentUser);
        if (oldTarget) {
          $(`.user_${e.target.id}`).addClass(`user_${e.target.id}`);
        }
      }
    }
    const deleteBtns = document.getElementsByClassName('deleteBtn');
    for (let j = 0; j < deleteBtns.length; j += 1) {
      if (messages[j].username === e.target.id) {
        messages.forEach((message, t) => {
          console.error(t);
        });
        // so the index must be indicating where the delete button shows up
        // and the deltet button is based on index right now with a .length on the 5 cards
        // console.error(`${j}`);
        messages.splice(`${j}`, 1);
        deleteBtns[j].addEventListener('click', (event) => {
          event.preventDefault();
          // console.error(j);
          domStringBuilder();
        });
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
