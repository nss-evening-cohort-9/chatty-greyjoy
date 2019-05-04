import 'bootstrap';
import '../styles/main.scss';
import attachEvents from './components/buttonEvents/buttonEvents';
import seedMsgs from './components/getMessages/getMessages';
import timeStamp from './helpers/timeStamp';
import multipleUsers from './components/multipleUsers';

const init = () => {
  seedMsgs.printSeedData();
  timeStamp.timeStamp();
  multipleUsers.multipleUsers();
  attachEvents.attachButton();
  attachEvents.attachClick();
  attachEvents.clearButton();
};

init();
