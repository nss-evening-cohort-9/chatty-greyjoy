import 'bootstrap';
import '../styles/main.scss';
import attachEvents from './components/buttonEvents/buttonEvents';
import seedMsgs from './components/getMessages/getMessages';
import timeStamp from './helpers/timeStamp';

const init = () => {
  seedMsgs.printSeedData();
  timeStamp.timeStamp();
  attachEvents.attachButton();
  attachEvents.attachClick();
};

init();
