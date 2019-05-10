import newMessage from '../newMessages/newMessages';
import getMessages from '../getMessages/getMessages';

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

// -----START listeners for radios---------
const userListeners = () => {
  document.getElementById('guest').checked = true;
  document.getElementById('guest').addEventListener('click', getMessages.domStringBuilder);
  document.getElementById('joebiden666').addEventListener('click', getMessages.domStringBuilder);
  document.getElementById('lizwarren4u').addEventListener('click', getMessages.domStringBuilder);
  document.getElementById('axlrose').addEventListener('click', getMessages.domStringBuilder);
  document.getElementById('pantsuitgirl').addEventListener('click', getMessages.domStringBuilder);
  document.getElementById('rando_bumpkin').addEventListener('click', getMessages.domStringBuilder);
};
// -----END listeners for radios---------

export default {
  attachClick,
  attachButton,
  clearButton,
  btnDivEvents,
  userListeners,
};
