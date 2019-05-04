import 'bootstrap';
import '../styles/main.scss';
import timeStamp from './helpers/timeStamp';
import multipleUsers from './components/multipleUsers';
import divDomBuilder from './components/divDomBuilder/divDomBuilder';

const init = () => {
  divDomBuilder.bodyDivCaller();
  timeStamp.timeStamp();
  multipleUsers.multipleUsers();
  attachEvents.attachButton();
  attachEvents.attachClick();
  attachEvents.clearButton();
};

init();
