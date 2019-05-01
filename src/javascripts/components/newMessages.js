import timeStamp from '../helpers/timeStamp';
import getMessages from './getMessages';

const newMessage = () => {
  // TODO - userName from radio button, input from input
  const newObj = { username: 'name', message: 'input', timeStamp: timeStamp.timeStamp() };
  getMessages.addMessages(newObj);
  getMessages.domStringBuilder();
};

export default { newMessage };
