import util from '../../helpers/util';
import './buttonsDiv.scss';
import getMessages from '../getMessages';

const btnDivBuilder = () => {
  let domString = '';
  domString += '<div class="d-flex row" id="sizeBtnContainer" data-toggle="buttons">'; // sarah's buttons
  domString += '    <button class="styleBtn" id="optionLarge">Large Text</button>'; // button
  domString += '    <button class="styleBtn firstBtnRed" id="optionRegular">Regular Text</button>'; // button
  domString += '</div>'; // button
  domString += '  <div id="darkOnDiv">'; // button
  domString += '    <button id="darkOn" class="styleBtn">Dark Mode</button>'; // DARK MODE BTN
  domString += '  </div>';
  util.printToDom('btnDivPrint', domString);
  getMessages.eventListeners();
  document.getElementById('darkOn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.add('dark');
  });
};

export default { btnDivBuilder };
