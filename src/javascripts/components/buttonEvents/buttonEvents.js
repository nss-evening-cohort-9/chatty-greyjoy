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

const editButton = () => {
  const editButtons = document.getElementsByClassName('editBtn');
  for (let i = 0; i < editButtons.length; i += 1) {
    editButtons[i].addEventListener('click', getMessages.editMessage);
  }

  // edit button next to the delete button that,
  // when clicked, will take the message and put it back in the message input at the top.
  // document.addEventListener('click', (e) => {
  //   console.error(e.target);
  //   if (e.target.classList.contains('editBtn')) {
  //     console.error('hi');
  //   }
  // });
};
// editButton();

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
  editButton,
  btnDivEvents,
};
