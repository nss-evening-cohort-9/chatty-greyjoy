import getMessages from '../getMessages/getMessages';
import newMessage from '../newMessages/newMessages';
// import users from '../users/users';

const attachClick = () => {
  document.getElementById('commentSection').addEventListener('keyup', (e) => {
    e.preventDefault();
    const key = e.which || e.keyCode;
    if (key === 13) {
      newMessage.newMessage();
    }
  });
};

const attachButton = () => {
  document.getElementById('commentBtn').addEventListener('click', newMessage.newMessage);
};

const clearButton = () => {
  document.getElementById('clearButton').addEventListener('click', getMessages.clearMessages);
};

const btnDivEvents = () => {
  const large = document.getElementById('optionLarge');
  const regular = document.getElementById('optionRegular');
  const msgDiv = document.getElementById('msgPrintingDiv');
  large.addEventListener('click', () => {
    msgDiv.style.fontSize = '150%';
  });
  regular.addEventListener('click', () => {
    msgDiv.style.fontSize = '14px';
  });
};

// const isChecked = () => {
//   concat.isChecked = true;
// };

// -----START listeners for radios---------
const userListeners = () => {
  // document.getElementById('guest').checked = true;
  // document.getElementById('guest').addEventListener('click', users.userNameDivBuilder);
  // document.getElementById('joebiden666').addEventListener('click', users.userNameDivBuilder);
  // document.getElementById('lizwarren4u').addEventListener('click', users.userNameDivBuilder);
  // document.getElementById('axlrose').addEventListener('click', users.userNameDivBuilder);
  // document.getElementById('pantsuitgirl').addEventListener('click', users.userNameDivBuilder);
  // document.getElementById('rando_bumpkin').addEventListener('click', users.userNameDivBuilder);
};
// -----END listeners for radios---------

export default {
  attachClick,
  attachButton,
  clearButton,
  btnDivEvents,
  userListeners,
};
