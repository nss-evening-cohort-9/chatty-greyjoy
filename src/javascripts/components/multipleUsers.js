import seedData from '../helpers/data/seedData';
import util from '../helpers/util';

let boldUser = [];

const buildBold = () => {
  util.printToDom('msgPrintingDiv', '');
  let domString = '';
  boldUser.forEach((message) => {
    domString += '<div class="card">';
    domString += '<div class="card-body">';
    const selection = document.getElementById(`${message.username}`);
    if (message.username === selection.id && selection.checked) {
      domString += `<div><strong>${message.username}</strong></div>`;
    } else {
      domString += `<div>${message.username}</div>`;
    }
    domString += `<div>${message.message}</div>`;
    domString += `<div>${message.timeStamp}</div>`;
    if (message.username === selection.id && selection.checked) {
      domString += '<button type="button" class="btn btn-danger btn-sm">Delete</button>';
    }
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('msgPrintingDiv', domString);
};

const multipleUsers = () => {
  seedData.getSeedData()
    .then((resp) => {
      console.error(resp);
      const dataResults = resp.data.messages;
      boldUser = dataResults;
      document.getElementById('guest').checked = true;
      buildBold();
      document.getElementById('guest').addEventListener('click', buildBold);
      document.getElementById('joebiden666').addEventListener('click', buildBold);
      document.getElementById('lizwarren4u').addEventListener('click', buildBold);
      document.getElementById('axlrose').addEventListener('click', buildBold);
      document.getElementById('pantsuitgirl').addEventListener('click', buildBold);
      document.getElementById('rando_bumpkin').addEventListener('click', buildBold);
    })
    .catch(err => console.error(err));
};

export default { multipleUsers };
