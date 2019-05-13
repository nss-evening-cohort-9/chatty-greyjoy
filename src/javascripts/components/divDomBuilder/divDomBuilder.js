import util from '../../helpers/util';
import buttonsDiv from '../buttonsDiv/buttonsDiv';

const bodyDivCaller = () => {
  const domString = `<div id="btnDivPrint"></div>
                     <div id="msgPrintingDiv" class="row wrap"></div>
                     <div id="radioSideBar"></div>`;
  util.printToDom('bodyDivBuild', domString);
  buttonsDiv.btnDivBuilder();
};

export default { bodyDivCaller };
