import 'bootstrap';
import '../styles/main.scss';
import timeStamp from './helpers/timeStamp';
import divDomBuilder from './components/divDomBuilder/divDomBuilder';
import editButton from './components/dynamicButtons/editButton';

const init = () => {
  divDomBuilder.bodyDivCaller();
  timeStamp.timeStamp();
  editButton.editButton();
};

init();
