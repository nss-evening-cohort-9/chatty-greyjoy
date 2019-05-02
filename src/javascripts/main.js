import 'bootstrap';
import '../styles/main.scss';
import timeStamp from './helpers/timeStamp';
import divDomBuilder from './components/divDomBuilder/divDomBuilder';
import getMessages from './components/getMessages';

const init = () => {
  divDomBuilder.bodyDivCaller();
  getMessages.printSeedData();
  timeStamp.timeStamp();
};

init();
