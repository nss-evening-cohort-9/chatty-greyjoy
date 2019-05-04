import timeStamp from '../../helpers/timeStamp';
import getMessages from '../getMessages/getMessages';
import editButton from '../buttonEvents/buttonEvents';

const newMessage = () => {
  // TODO - username from radio button, 'name' is a placeholder
  const newObj = { username: '7TenSplit', message: document.getElementById('commentSection').value, timeStamp: timeStamp.timeStamp() };
  getMessages.addMessages(newObj);
  getMessages.domStringBuilder();
  document.getElementById('commentSection').value = '';
  editButton();
};

export default { newMessage };
