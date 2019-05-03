import 'bootstrap';
import '../styles/main.scss';
import seedMsgs from './components/getMessages';
import timeStamp from './helpers/timeStamp';
import multipleUsers from './components/multipleUsers';

const init = () => {
  seedMsgs.printSeedData();
  timeStamp.timeStamp();
  multipleUsers.multipleUsers();
};

init();
