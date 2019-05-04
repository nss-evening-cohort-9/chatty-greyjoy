import timeStamp from '../../helpers/timeStamp';
import getMessages from '../getMessages/getMessages';
// import multipleUsers from '../multipleUsers';

const userArr = [];
const radios = document.getElementsByName('radio');

const currentUser = () => {
  radios.forEach((radio) => {
    if (radio.checked) {
      const user = radio.value;
      userArr.push(user);
    }
    return false;
  });
};

const newMessage = () => {
  currentUser();
  // TODO - username from radio button, 'name' is a placeholder
  const newObj = {
    username: userArr.pop(),
    message: document.getElementById('commentSection').value,
    timeStamp: timeStamp.timeStamp(),
  };
  getMessages.addMessages(newObj);
  getMessages.domStringBuilder();
  document.getElementById('commentSection').value = '';
};

export default { newMessage };
