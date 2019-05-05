import moment from 'moment';

const timeStamp = () => (
  moment().format('MMMM Do YYYY, h:mm:ss a')
);

export default { timeStamp };
