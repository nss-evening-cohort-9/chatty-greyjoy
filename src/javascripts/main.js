import 'bootstrap';
import '../styles/main.scss';
// import users from './components/users/users';
import divDomBuilder from './components/divDomBuilder/divDomBuilder';
import getMessages from './components/getMessages/getMessages';

const init = () => {
  divDomBuilder.bodyDivCaller();
  getMessages.printSeedData()
    .then(() => {
      getMessages.domStringBuilder();
    })
    // .then(() => {
    //   users.userNameDivBuilder();
    // })
    // .then(() => {
    //   divDomBuilder.userListeners();
    // })
    .catch(err => console.error(err));
};

init();
