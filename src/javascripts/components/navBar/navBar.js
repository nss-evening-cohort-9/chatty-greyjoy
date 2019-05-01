import util from '../../helpers/util';
// import './navBar.scss';

// const darkModeBG = 'navBarDM';
// const lightModeBG = 'navBar';

const navBarBuilder = () => {
  let domString = '';
  domString += '<div class="d-flex container-fluid col navDiv">';
  domString += '<nav id="navBar" class="row wrap">';
  domString += '    <div class="d-flex">';
  domString += '      <div>';
  domString += '        <!-- <span class="mask"></span> -->';
  domString += '        <img class="heartImg" src="http://getdrawings.com/vectors/heart-vector-outline-21.png" alt="outline of red heart shape">';
  domString += '      </div>';
  domString += '      <img class="pinImg" src="http://clipart-library.com/images/ki8okoebT.png" alt="outline of 10 bowling pins">';
  domString += '      <h1 id="navBarBrand" class="" href="#">Strikes & Players</h1>';
  domString += '      <p class="tagLine"><span class="txtSpan">Don`t hate the player</span> || Hate the game</p>';
  domString += '    </div>';
  domString += '    <!-- <span id="navHr"></span> -->';
  domString += '    <div class="col navRightHalf">';
  domString += '      <form class="formClass row flex-no-wrap">';
  domString += '        <span class="spanClass mr-auto"></span>';
  domString += '        <i class="icon far fa-comment"></i>';
  domString += '        <input id="commentSection" class="inputText flex-shrink-1" type="text" placeholder="" aria-label="Search">';
  domString += '        <button id="commentBtn" type="submit">Comment</button>';
  domString += '      </form>';
  domString += '  <div class="toggleDM">'; // toggle div
  domString += '    <label class="btn inactive midnightBowl">';
  domString += '      <input type="radio" name="darkMode" id="darkModeToggle" autocomplete="off" unchecked> Midnight Bowl';
  domString += '    </label>';
  domString += '  </div>'; // end toggle div
  domString += '    </div>';
  domString += '  </nav>';
  domString += '</div>';
  util.printToDom('navBarPrint', domString);
};

export default { navBarBuilder };
