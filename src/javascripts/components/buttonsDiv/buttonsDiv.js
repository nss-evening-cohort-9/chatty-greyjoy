import util from '../../helpers/util';
import './buttonsDiv.scss';
import getMessages from '../getMessages/getMessages';
import attachEvents from '../buttonEvents/buttonEvents';

const btnDivBuilder = () => {
  let domString = '';
  domString += '<div class="d-flex row" id="sizeBtnContainer" data-toggle="buttons">';
  domString += '    <button class="styleBtn" id="optionLarge">Large Text</button>';
  domString += '    <button class="styleBtn firstBtnRed" id="optionRegular">Regular Text</button>';
  domString += '</div>';
  domString += '<div id="darkOnDiv">';
  domString += '  <label class="switch">';
  domString += '    <span id="whichMode" class="midniteBowl otherMode"></span>';
  domString += '    <input id="darkOn" type="checkbox" for="Night Mode">';
  domString += '      <span class="slider round"></span>';
  domString += '  </label>';
  domString += '</div>';
  util.printToDom('btnDivPrint', domString);
  attachEvents.btnDivEvents();
  document.getElementById('darkOn').addEventListener('click', () => {
    const lightMode = document.querySelector('body');
    const whichMode = document.getElementById('whichMode');
    lightMode.classList.toggle('light');
    const darkE = document.getElementById('bodyId');
    if (darkE.classList.contains('light')) {
      whichMode.classList.add('otherMode');
      whichMode.classList.remove('nightBowl');
    } else {
      whichMode.classList.add('nightBowl');
      whichMode.classList.remove('otherMode');
    }
  });
  getMessages.printSeedData();
  attachEvents.attachButton();
  attachEvents.attachClick();
  attachEvents.clearButton();
  attachEvents.userListeners();
};

export default { btnDivBuilder };
