import moment from 'moment';

const timeStamp = () => {
  console.error(moment().format('MMMM Do YYYY, h:mm:ss a'));
};

export default { timeStamp };
