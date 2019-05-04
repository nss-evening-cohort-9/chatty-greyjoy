import 'bootstrap';
import '../styles/main.scss';
import timeStamp from './helpers/timeStamp';
import divDomBuilder from './components/divDomBuilder/divDomBuilder';

const init = () => {
  divDomBuilder.bodyDivCaller();
  timeStamp.timeStamp();
};

init();
