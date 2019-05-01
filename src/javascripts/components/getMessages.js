import util from '../helpers/util';
import seedData from '../helpers/data/seedData';

let messages = [];

const domStringBuilder = () => {
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="card">';
    domString += '<div class="card-body">';
    domString += `<div>${message.username}</div>`;
    domString += `<div>${message.message}</div>`;
    domString += `<div>${message.timeStamp}</div>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('msgPrintingDiv', domString);
};

const printSeedData = () => {
  seedData.getSeedData()
    .then((resp) => {
      console.error(resp);
      const dataResults = resp.data.messages;
      messages = dataResults;
      console.error(messages);
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { printSeedData };


// -------------------Start--------------------------
// -------------Message limit------------------------
seedDataArr.push(newObj);
if (seedDataArr.length > 19) {seedDataArr.shift();}
domStringBuilder(seedDataArr);

// ----------------Messsage limit--------------------
// ---------------------End--------------------------
