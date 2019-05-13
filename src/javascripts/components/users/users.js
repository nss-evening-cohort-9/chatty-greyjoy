import util from '../../helpers/util';
import getMessages from '../getMessages/getMessages';
import './users.scss';

const userNameDivBuilder = () => {
  const messages = getMessages.domStringBuilder();
  let domString = '';
  // let deleteId = -1;
  let matchIdCounter = -1;
  const userNameArr = [];
  messages.forEach((message) => {
    userNameArr.push(message.username);
  });
  userNameArr.forEach((user, i) => {
    matchIdCounter += 1;
    console.error(matchIdCounter);
    console.error(i);
    if (i === matchIdCounter) {
      domString += `<div class="card-body">
      <div class="userName text-warning">${user}</div>`;
      util.printToDom(`${matchIdCounter}`, domString);
    }
  });
  // console.error(userNameArr);
  // console.error(counter);
  // messages.forEach((message, i) => {
  //   if (message) {
  //     console.error(i);
  //     domString += `<div class="card-body">
  //     <div class="userName text-warning">${message.username}</div>`;
  //     util.printToDom(`usersDeleteDiv${i}`, domString);
  //   }
  // deleteId += 1;
  // messages[deleteId].deleteId = `${deleteId}`;
  // domString += '<div class="card-body">';
  // const selection = document.getElementById(`${message.username}`);
  // if (message.username === selection.id && selection.checked) {
  //   domString += `<div class="userName text-warning">${message.username}</div>`;
  // } else {
  //   domString += `<div class="userName">${message.username}</div>`;
  // }
  // domString += `<div class="cardBody">${message.message}</div>`;
  // util.printToDom(`usersDeleteDiv${counter.length}`, domString);
  // counter.push(1);
  // });
  // const deleteMessage = (e) => {
  //   if (getMessages.messages[e.target.id].deleteId === e.target.id) {
  //     getMessages.messages.splice(e.target.id, 1);
  //   }
  // };
  // const deleteArr = document.querySelectorAll('.btn-danger');
  // deleteArr.forEach((button) => {
  //   button.addEventListener('click', deleteMessage);
  // }); // -------END delete button------------
};

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

// -----START listeners for radios---------
// const userListeners = () => {
//   document.getElementById('guest').checked = true;
//   document.getElementById('guest').addEventListener('click', userNameDivBuilder);
//   document.getElementById('joebiden666').addEventListener('click', userNameDivBuilder);
//   document.getElementById('lizwarren4u').addEventListener('click', userNameDivBuilder);
//   document.getElementById('axlrose').addEventListener('click', userNameDivBuilder);
//   document.getElementById('pantsuitgirl').addEventListener('click', userNameDivBuilder);
//   document.getElementById('rando_bumpkin').addEventListener('click', userNameDivBuilder);
// };
// -----END listeners for radios---------

// const domStringBuilder = () => {
//   let domString = '';
//   let deleteId = -1;
//   messages.forEach((message, i) => {
//     deleteId += 1;
//     messages[deleteId].deleteId = `${deleteId}`;
//     domString += '<div class="col-12">';
//     domString += '  <div class="card col-4 d-flex">';
//     domString += '    <div class="card-body">';
//     const selection = document.getElementById(`${message.username}`);
//     if (message.username === selection.id && selection.checked) {
//       domString += `<div class="userName text-warning">${message.username}</div>`;
//     } else {
//       domString += `<div class="userName">${message.username}</div>`;
//     }
//     domString += `     <div class="cardBody">${message.message}</div>`;
//     domString += `     <div class="timeStamp">${message.timeStamp}</div>`;
//     domString += '     <div " class="justify-content-center timeStamp"></div>';
//     domString += '      <div class="row justify-content-center">';
//     domString += '      </div>'; // end flex row thumbs div
//     domString += '    </div>';
//     domString += '  </div>';
//     domString += '</div>';
//     domString += '       <div class="thumbs">';
//     domString += `<i id="unique${i}"class="likes fa fa-thumbs-up"><span
// class="numThumb">0</span></i>`;
//     domString += '       </div>';
//     domString += '       <div class="thumbs">';
//     domString += `<i id="uniquer${i}"class="dislikes fa fa-thumbs-down"><span
// class="numThumb">0</span></i>`;
//     domString += '       </div>';
//     likeIdBuilderArr.push(i);
//   });
//   util.printToDom('msgPrintingDiv', domString);
//   const deleteMessage = (e) => {
//     if (messages[e.target.id].deleteId === e.target.id) {
//       messages.splice(e.target.id, 1);
//     }
//   };
//   const deleteArr = document.querySelectorAll('.btn-danger');
//   deleteArr.forEach((button) => {
//     button.addEventListener('click', deleteMessage);
//   }); // -------END delete button------------
// };

export default { radioDivBuilder, userNameDivBuilder };
