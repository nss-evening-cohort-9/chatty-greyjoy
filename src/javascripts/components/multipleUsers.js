import getMessages from './getMessages';

const boldUser = () => {
  const abc = document.getElementById('123');
  abc.style.fontWeight = 'bold';
};

const multipleUsers = () => {
  getMessages.printSeedData()
    .then((resp) => {
      console.error(resp);
      boldUser();
    })
    .catch(err => console.error(err));
};

export default { multipleUsers };
