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
  // e.preventDefault();
  document.getElementById('commentBtn').addEventListener('click', newMessage.newMessage);
};

export default { attachClick, attachButton };
