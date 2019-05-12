import util from '../../helpers/util';
import './buttonsDiv.scss';
import attachEvents from '../buttonEvents/buttonEvents';

const btnDivBuilder = () => {
  const domString = `<div class="d-flex row" id="sizeBtnContainer" data-toggle="buttons">
                        <button class="styleBtn" id="optionLarge">Large Text</button>
                        <button class="styleBtn firstBtnRed" id="optionRegular">Regular Text</button>
                    </div>
                    <div id="darkOnDiv">
                      <label class="switch">
                        <span id="whichMode" class="midniteBowl otherMode"></span>
                        <input id="darkOn" type="checkbox" for="Night Mode">
                          <span class="slider round"></span>
                      </label>
                    </div>`;
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
  attachEvents.attachButton();
  attachEvents.attachClick();
  attachEvents.clearButton();
};

export default { btnDivBuilder };
