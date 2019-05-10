import util from '../../helpers/util';
import seedData from '../../helpers/data/seedData';
import './getMessages.scss';
import $ from '../../../../node_modules/jquery';

let messages = [];
const countArr = [];
const eventArr = [];
const getMessages = () => messages;

const addMessages = (newMessage) => {
  messages.push(newMessage);
  if (messages.length > 20) {
    messages.shift();
  }
};

const counterFn = (num) => {
  countArr.push(num);
  return num;
};

// const eventFn = (num) => {
//   eventArr.push(num);
//   return num;
// };

const domStringBuilder = () => {
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="col-12">';
    domString += '  <div class="card col-4 d-flex">';
    domString += '    <div class="card-body">';
    domString += `     <div class="userName">${message.username}</div>`;
    domString += `     <div class="cardBody">${message.message}</div>`;
    domString += `     <div class="timeStamp">${message.timeStamp}</div>`;
    domString += `<div id="unique${countArr.length}" class="timeStamp">`;
    domString += `<i id="unique${eventArr.length}" class="likes fa fa-thumbs-up"></i>  Likes`;
    domString += '<a class="like">';
    domString += `<input class="qty1" name="qty1" readonly="readonly" type="text" value="${countArr.length}"/>`;
    domString += '</a>';
    domString += '</div>';
    domString += '    </div>';
    domString += '  </div>';
    domString += '</div>';
    counterFn(1);
    util.printToDom('msgPrintingDiv', domString);
    $('.likes').click((e) => {
      e.preventDefault();
    });
  });
};

// --------------Change Font Start------------------

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

export default {
  printSeedData,
  domStringBuilder,
  getMessages,
  addMessages,
  clearMessages,
};








import util from '../../helpers/util';
import seedData from '../../helpers/data/seedData';
import './getMessages.scss';
import $ from '../../../../node_modules/jquery';

let messages = [];
// const countArr = [];
// const eventArr = [];
const messagesUpDown = [];
const getMessages = () => messages;

const addMessages = (newMessage) => {
  messages.push(newMessage);
  if (messages.length > 20) {
    messages.shift();
  }
};

// const counterFn = (num) => {
//   countArr.push(num);
//   // console.error(messages.forEach((message) => {
//   //   console.error(message.id, 'hi');
//   //   // console.error('hi');
//   // }));
//   return num;
// };

// const eventA = (num) => {
//   console.error(num);
//   return num;
// };

const messageLikes = [
  {
    userId: 1,
    messageId: 'unique0',
    likes: false,
    dislikes: false,
  },
  {
    userId: 2,
    messageId: 'unique1',
    likes: false,
    dislikes: false,
  },
  {
    userId: 1,
    messageId: 'unique2',
    likes: false,
    dislikes: false,
  },
  {
    userId: 4,
    messageId: 'unique3',
    likes: false,
    dislikes: false,
  },
  {
    userId: 5,
    messageId: 'unique4',
    likes: false,
    dislikes: false,
  },
];

// const likeFnEvent = (e) => {
//   e.preventDefault();
//   messages.forEach((message) => {
//     const messageVotes = messageLikes.filter(msg => msg.messageId === message.id);
//     const messageWithUpDown = Object.create(message);
//     messageWithUpDown.upTotal = messageVotes.filter(msg => msg.up).length;
//     console.error(messageWithUpDown.upTotal);
//     messageWithUpDown.downTotal = messageVotes.filter(msg => msg.down).length;
//     messagesUpDown.push(messageWithUpDown);
//     // console.error(messageWithUpDown);
//   });
// if (messageLikes.find(m => m.userId === ['userId'] && m.messageId === e.target.closest())) {
// if (messageLikes.filter(m => m.messageId === e.target.closest('i'))) {
//   messageLikes.up = 0;
// console.error(messageLikes);
// update the old object in messageLike array
// } else {
// console.error(messageLikes, 'not working');
// add a new object into messageLikeArray
// }
// };

// if (messageLikes.find(m => m.userId === [userId] && m.messageId === e.target.closest(
//  ['something that has the message Id on it'])) {
//     // update the old object in messageLike array
//   }
// else {
//  // add a new object into messageLikeArray
// }

const domStringBuilder = () => {
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="col-12">';
    domString += '  <div class="card col-4 d-flex">';
    domString += '    <div class="card-body">';
    domString += `     <div class="userName">${message.username}</div>`;
    domString += `     <div class="cardBody">${message.message}</div>`;
    domString += `     <div class="timeStamp">${message.timeStamp}</div>`;
    domString += '<div " class="timeStamp">';
    domString += '</div>';
    domString += `<i id="${message.id}"class="likes fa fa-thumbs-up"></i>`;
    // .likes find 'closes'(#id) {change value from 0 to 1}
    // value will need to be a function template literal? Globally declared.
    domString += `<input class="" name="" readonly="readonly" type="text" value="${message.likes}"/>`;
    // domString += '</a>';
    domString += '    </div>';
    domString += '  </div>';
    domString += '</div>';
    util.printToDom('msgPrintingDiv', domString);
    // $('.likes').click((e) => {
    //   e.preventDefault();
    //   return messages[e.target.attr.id];
    // const whatever = document.getElementsByClassName('.int').parseInt());
    // counterFn(1);
    //   // messages.forEach((m) => {
    //   //   const messageVotes = messageLikes.filter(msg => msg.messageId === m.id);
    //   //   const messageWithUpDown = Object.create(message);
    //   //   messageWithUpDown.upTotal = messageVotes.filter(msg => msg.up).length;
    //   //   messageWithUpDown.downTotal = messageVotes.filter(msg => msg.down).length;
    //   //   messagesUpDown.push(messageWithUpDown);
    //   // });
    // });
    $(document).on('click', '.likes', (e) => {
      e.preventDefault();
      messages.forEach((m) => {
        const messageVotes = messageLikes.filter(msg => msg.messageId === m.id);
        const messageWithUpDown = Object.create(message);
        messageWithUpDown.upTotal = messageVotes.filter(msg => msg.likes).length;
        messageWithUpDown.downTotal = messageVotes.filter(msg => msg.dislikes).length;
        messagesUpDown.push(messageWithUpDown);
      });
      // messages[this.id].likes += 1;
      domStringBuilder(messages);
    });
  });
};

// messageLikes.filter(m => m.messageId === message.id && m.up).length

// --------------Change Font Start------------------

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

export default {
  printSeedData,
  domStringBuilder,
  getMessages,
  addMessages,
  clearMessages,
};
