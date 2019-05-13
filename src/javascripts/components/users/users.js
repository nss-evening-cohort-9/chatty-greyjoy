import util from '../../helpers/util';
import './users.scss';

// sideBar for User Names
const radioDivBuilder = () => {
  const domString = `<div id="sideNav">
  <h3 id="usersHeader">Users</h3>
    <ul class="list-unstyled components">
      <li><input type="radio" name="radio" class="userSelector userRadio" value="guest" id="guest">guest</input></li>
      <li><input type="radio" name="radio" class="userSelector userRadio" value="joebiden666" id="joebiden666">joebiden666</input></li>
      <li><input type="radio" name="radio" class="userSelector userRadio" value="lizwarren4u" id="lizwarren4u">lizwarren4u</li>
      <li><input type="radio" name="radio" class="userSelector userRadio" value="axlrose" id="axlrose">axlrose</li>
      <li><input type="radio" name="radio" class="userSelector userRadio" value="pantsuitgirl" id="pantsuitgirl">pantsuitgirl</li>
      <li><input type="radio" name="radio" class="userSelector userRadio" value="rando_bumpkin" id="rando_bumpkin">rando_bumpkin</li>
    </ul>
  </div>`;
  util.printToDom('radioSideBar', domString);
};

export default { radioDivBuilder };
