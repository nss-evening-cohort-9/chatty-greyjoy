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

export default { attachClick, attachButton, clearButton };
