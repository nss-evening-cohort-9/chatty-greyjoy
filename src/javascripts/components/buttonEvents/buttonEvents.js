import getMessages from '../getMessages/getMessages';
import newMessage from '../newMessages/newMessages';

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

export default {
  attachClick,
  attachButton,
  clearButton,
  btnDivEvents,
};
