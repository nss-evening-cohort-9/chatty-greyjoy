import newMessage from './newMessages';

const addedMessage = () => {
  // const eventId = e.target.id;
  newMessage.newMessage();
};

const attachEvents = () => {
  document.getElementById('msgPrintingDiv').addEventListener('keyup', addedMessage);
};

export default { attachEvents };
