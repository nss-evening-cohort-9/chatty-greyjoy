import util from '../../helpers/util';
import seedData from '../../helpers/data/seedData';
import './getMessages.scss';


let messages = [];

const getMessages = () => messages;

const addMessages = (newMessage) => {
  messages.push(newMessage);
  if (messages.length > 20) {
    messages.shift();
  }
};

const domStringBuilder = () => {
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="col-12">';
    domString += '  <div class="card col-4 d-flex">';
    domString += '    <div class="card-body">';
    domString += `     <div class="userName">${message.username}</div>`;
    domString += `     <div class="cardBody">${message.message}</div>`;
    domString += `     <div class="timeStamp">${message.timeStamp}</div>`;
    domString += '     <button type="button" class="btn btn-danger editBtn">edit message</button>';
    domString += '    </div>';
    domString += '  </div>';
    domString += '</div>';
  });
  util.printToDom('msgPrintingDiv', domString);
};

// --------------Start------------------

const changeFont = (e) => {
  e.preventDefault();
  const msgDiv = document.getElementById('msgPrintingDiv');
  if (e.target.id === 'optionRegular') {
    msgDiv.style.fontSize = '14px';
  } else if (e.target.id === 'optionLarge') {
    msgDiv.style.fontSize = '150%';
  }
};

// -----------larger text----------------
const myListeners = () => {
  document.getElementById('optionLarge').addEventListener('click', changeFont);
  document.getElementById('optionRegular').addEventListener('click', changeFont);
};
// -----------larger text----------------

const printSeedData = () => {
  seedData.getSeedData()
    .then((resp) => {
      const dataResults = resp.data.messages;
      messages = dataResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
  myListeners();
};


const clearMessages = () => {
  messages = [];
  domStringBuilder();
};

const editMessage = (e) => {
  e.preventDefault();
  console.error('hi');
  // make document.getElementById('commentSection').value put
  // the message back in the input field at the top of the page

  // document.getElementById("myP").contentEditable = "true";


// Add an edit button next to the delete button that,
// when clicked, will take the message and put it back in the message input at the top.
// Once user edits the message and presses the return key again,
// the message text in the list should be updated.
};

// attachEvents.editButton();
export default {
  printSeedData,
  domStringBuilder,
  getMessages,
  addMessages,
  clearMessages,
  editMessage,
};
