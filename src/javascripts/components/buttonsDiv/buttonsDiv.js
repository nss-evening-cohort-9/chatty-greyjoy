import util from '../../helpers/util';
import './buttonsDiv.scss';
import getMessages from '../getMessages';

let viewMode = 'Night Bowl';

const darkEvent = () => {
  const lightMode = document.querySelector('body');
  lightMode.classList.toggle('light');
  if (lightMode === false) {
    viewMode = 'Day Bowl';
    console.error('day');
  } else {
    viewMode = 'Night Bowl';
    console.error('night');
  }
};

const btnDivBuilder = () => {
  let domString = '';
  domString += '<div class="d-flex row" id="sizeBtnContainer" data-toggle="buttons">'; // sarah's buttons
  domString += '    <button class="styleBtn" id="optionLarge">Large Text</button>'; // button
  domString += '    <button class="styleBtn firstBtnRed" id="optionRegular">Regular Text</button>'; // button
  domString += '</div>'; // button
  domString += '<div id="darkOnDiv">'; // button
  domString += '  <label class="switch">';
  domString += `    <span class="midniteBowl">${viewMode}</span>`;
  domString += '    <input id="darkOn" type="checkbox" for="Night Mode">';
  domString += '      <span class="slider round"></span>';
  domString += '  </label>';
  domString += '</div>';
  util.printToDom('btnDivPrint', domString);
  getMessages.eventListeners();
  document.getElementById('darkOn').addEventListener('click', darkEvent);
};

export default { btnDivBuilder, darkEvent };
