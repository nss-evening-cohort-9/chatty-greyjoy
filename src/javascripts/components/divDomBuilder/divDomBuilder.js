import util from '../../helpers/util';
import buttonsDiv from '../buttonsDiv/buttonsDiv';

const bodyDivCaller = () => {
  let domString = '';
  domString += '<div id="btnDivPrint"></div>';
  domString += '<div class="row wrap" id="msgPrintingDiv"></div>';
  util.printToDom('bodyDivBuild', domString);
  buttonsDiv.btnDivBuilder();
};

export default { bodyDivCaller };
