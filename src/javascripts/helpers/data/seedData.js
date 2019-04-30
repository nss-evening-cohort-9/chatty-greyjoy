import axios from 'axios';

const getSeedData = () => axios.get('../db/messages.json');

export default { getSeedData };
