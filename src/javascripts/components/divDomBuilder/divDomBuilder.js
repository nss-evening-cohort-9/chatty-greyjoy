import util from '../../helpers/util';
import buttonsDiv from '../buttonsDiv/buttonsDiv';
import users from '../users/users';

// -----START listeners for radios---------
const userListeners = () => {
  document.getElementById('guest').checked = true;
  document.getElementById('guest').addEventListener('click', users.userNameDivBuilder);
  document.getElementById('joebiden666').addEventListener('click', users.userNameDivBuilder);
  document.getElementById('lizwarren4u').addEventListener('click', users.userNameDivBuilder);
  document.getElementById('axlrose').addEventListener('click', users.userNameDivBuilder);
  document.getElementById('pantsuitgirl').addEventListener('click', users.userNameDivBuilder);
  document.getElementById('rando_bumpkin').addEventListener('click', users.userNameDivBuilder);
};
// -----END listeners for radios---------

const bodyDivCaller = () => {
  const domString = `<div id="btnDivPrint"></div>
                     <div id="msgPrintingDiv" class="row wrap"></div>
                     <div id="radioSideBar"></div>`;
  util.printToDom('bodyDivBuild', domString);
  buttonsDiv.btnDivBuilder();
  users.radioDivBuilder();
};

export default { bodyDivCaller, userListeners };
