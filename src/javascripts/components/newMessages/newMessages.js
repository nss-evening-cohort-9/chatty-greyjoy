import timeStamp from '../../helpers/timeStamp';
import getMessages from '../getMessages/getMessages';
// import multipleUsers from '../multipleUsers';

const radios = document.getElementsByName('radio');

const CurrentUser = () => {
  radios.forEach((radio) => {
    if (radio.checked) {
      const user = radio.value;
      return user;
    }
    return false;
  });
};

const newMessage = () => {
  // TODO - username from radio button, 'name' is a placeholder
  const newObj = {
    username: CurrentUser(),
    message: document.getElementById('commentSection').value,
    timeStamp: timeStamp.timeStamp(),
  };
  getMessages.addMessages(newObj);
  getMessages.domStringBuilder();
  document.getElementById('commentSection').value = '';
};

export default { newMessage };
