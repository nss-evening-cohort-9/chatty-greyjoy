import 'bootstrap';
import '../styles/main.scss';
import attachEvents from './components/buttonEvents';
import seedMsgs from './components/getMessages';
import timeStamp from './helpers/timeStamp';

const init = () => {
  seedMsgs.printSeedData();
  timeStamp.timeStamp();
  attachEvents.attachEvents();
};

init();
