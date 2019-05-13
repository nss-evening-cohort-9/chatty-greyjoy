import 'bootstrap';
import '../styles/main.scss';
import divDomBuilder from './components/divDomBuilder/divDomBuilder';
import getMessages from './components/getMessages/getMessages';
import users from './components/users/users';

const init = () => {
  divDomBuilder.bodyDivCaller();
  users.radioDivBuilder();
  getMessages.printSeedData()
    .then(() => {
      getMessages.domStringBuilder();
    })
    .catch(err => console.error(err));
};

init();
