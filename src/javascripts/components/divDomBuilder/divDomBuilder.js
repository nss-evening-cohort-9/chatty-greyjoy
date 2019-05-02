import util from '../../helpers/util';
import navBar from '../navBar/navBar';
// import getMessages from '../getMessages';

const bodyDivCaller = () => {
  let domString = '';
  domString += '<div id="navBarPrint"></div>';
  domString += '<div id="btnDivPrint"></div>';
  domString += '<div class="row wrap" id="msgPrintingDiv"></div>';
  util.printToDom('bodyDivBuild', domString);
  navBar.navBarBuilder();
};

export default { bodyDivCaller };
