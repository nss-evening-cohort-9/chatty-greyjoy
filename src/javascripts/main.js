import 'bootstrap';
import '../styles/main.scss';
import seedMsgs from './components/getMessages';
import timeStamp from './helpers/timeStamp';
import darkMode from './components/divDomBuilder/divDomBuilder';
// import navBar from './components/navBar/navBar';

const init = () => {
  darkMode.bodyDivCaller();
  seedMsgs.printSeedData();
  timeStamp.timeStamp();
};

init();
