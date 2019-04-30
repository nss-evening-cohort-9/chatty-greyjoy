import 'bootstrap';
import '../styles/main.scss';
import seedMsgs from './components/getMessages';
import timeStamp from './helpers/timeStamp';

const init = () => {
  seedMsgs.printSeedData();
  timeStamp.timeStamp();
};

init();
